<?php
//give permission to write new files
// PUTTY -> login with caeser -> fs sa ~/../web/gonogo_data p-decisionlab.web write
// the directory "data" is writable by the server (chmod 777)
// The sub-directories for each task may also have to be created and set to writeable

/*
The $_POST[] array will contain a JSON string which decomposes into:
{
    meta: a meta-data list (UID, UIDplatform, loc, task, consentTime, eventLog, debriefGeneralComments)
    demographics: answers to demographic questions (gender, age, education, consentTime)
    trials: trial-by-trial data. Varies by task type
}

Data are tagged with a sequential ID code (unique within experimental task). This links the private (meta) data
with the public demographic and trials data.

Data are saved in the ./data/ directory as follows:
    [meta appended to] ./data/participant-metadata.csv
    [demographics appended to] ./data/[task]/demographics.csv
    [trials saved as] ./data/[task]/[yyyy-mm-dd]_[hh-mm-ss]_[ID].csv

All .csv files have a header row containing the variable names.

[task] is screened via whitelisting.
*/

//phpinfo();
error_reporting(0);

const TASK_LIST = array('flanker', 'primeprobe', 'simon', 'stroop');
const META_FILE_NAME = '../data/private/participant-metadata.csv';
const ERROR_FILE_NAME = '../data/private/error.log';

$out = array(
    "error" => "",
    "code" => 200,
    "content" => ""
);

function sulk($out, $meta) {

    $now = new DateTime('NOW');
    $logStr = "[".$now->format('c')."] results not saved for user ".
        $meta["userId"]." (".$meta["recruitmentPlatform"].
        "): ".$out["error"].PHP_EOL;

    // No error catching because we want PHP to throw issues to log on problem.
    $handle = fopen(ERROR_FILE_NAME, 'a+');
    fwrite($handle, $logStr);
    fclose($handle);

    die(json_encode($out));
}

// Unpack POST data
$json = json_decode(stripslashes(file_get_contents("php://input")));

$meta = (array) $json->meta;
$demographics = (array) $json->demographics;
$trials = $json->trials;

$task = $meta["task"];

// Check task is in the whitelist
if(array_search($task, TASK_LIST, true) === false) {
    $out["code"] = 403;
    $out["error"] = "Unrecognized task name '$task'";
    sulk($out, $meta);
}

// Create metadata and demographics files if necessary
if(!file_exists(META_FILE_NAME)) {
    if(($handle = fopen(META_FILE_NAME, 'w')) !== false) {
        $meta["id"] = ""; // make sure there's an id column included!
        fputcsv($handle, array_keys($meta));
    } else {
        $out["code"] = 500;
        $out["error"] = "Unable to initialize results storage.";
        sulk($out, $meta);
    }
}

$demoFileName = "../data/$task/demographics.csv";
if(!file_exists($demoFileName)) {
    if(($handle = fopen($demoFileName, 'w')) !== false) {
        $demographics["id"] = ""; // make sure there's an id column included!
        fputcsv($handle, array_keys($demographics));
    } else {
        $out["code"] = 500;
        $out["error"] = "Unable to initialize demographic results storage.";
        sulk($out, $meta);
    }
}

// Calculate the ID by searching for largest ID in existing files
$id = 0;
$fileNames = scandir("../data/$task/");
foreach($fileNames as $name) {
    if(preg_match("/_([0-9]+).csv/", $name, $matches) === 1){
        $x = intval($matches[1]);
        if($x > $id)
            $id = $x;
    }
}
$id = strval($id + 1);

// Update the objects with the ID
$meta["id"] = $id;
$demographics["id"] = $id;
foreach($trials as $trial)
    $trial->id = $id;

// Append the metadata to the metadata file
if(($handle = fopen(META_FILE_NAME, 'a')) !== false) {
    fputcsv($handle, $meta);
} else {
    $out["code"] = 500;
    $out["error"] = "Unable to update results storage.";
    sulk($out, $meta);
}

// Append the demographics info to the demographics file
if(($handle = fopen($demoFileName, 'a')) !== false) {
    fputcsv($handle, $demographics);
} else {
    $out["code"] = 500;
    $out["error"] = "Unable to update demographic results storage.";
    sulk($out, $meta);
}

$trialFileName = "../data/$task/".date('Y-m-d_H-i-s')."_$id.csv";
// Create the trials file
if(($handle = fopen($trialFileName, 'w')) !== false) {
    fputcsv($handle, array_keys((array) $trials[0]));
    foreach($trials as $trial) {
        $trial->id = $id;
        fputcsv($handle, (array) $trial);
    }
} else {
    $out["code"] = 500;
    $out["error"] = "Unable to save trial results for user ID $id.";
    sulk($out, $meta);
}


// Send back the all clear
$out["content"] = "Data saved successfully.";
sulk($out, $meta);
?>