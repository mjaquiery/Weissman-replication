# Weissman materials rewrite
Matt Jaquiery, 2019

A from-scratch implementation of four psychological tasks, for the purpose of replicating Weissman, D. H., Jiang, J., & Egner, T. (2014). Determinants of congruency sequence effects without learning and memory confounds. Journal of Experimental Psychology: Human Perception and Performance, 40(5), 2022-2037. 

# Tasks

Four tasks are implemented:
* Flanker task
    * Three identical letters either side of a target, presented until response. Identify the target letter.
* Prime-probe task
    * Three identical letters in a vertical stack presented for 133ms, 33ms gap, followed by a probe presented for 133ms. Identify the probe. 
* Simon task
    * Different-coloured squares presented for 250ms in different spatial locations. Identify the square's colour using directional arrow keys.
* Stroop task
    * Identify the colour in which a colour-word is printed. Words presented until response.
    
All the tasks support congruency manipulations, e.g. in a congruent Flanker task the flankers and the target are the same (XXXXXXX), whereas in an incongruent one they are different (XXXSXXX).

Each task uses a split-stimulus approach to eliminate learning and memory confounds with congruency. For each task, odd trials use one stimulus pair (e.g. up/down, or red/blue), while even trials use another (e.g. left/right, or yellow/green).

# Replication

For more information on the replication, lead by **Mate Gyurkovics** (Sheffield), with co-authors **Bence Palfi** (Sussex), **Marton Kovacs** (Budapest), **Balazs Aczel** (Budapest), and **Matt Jaquiery** (Oxford), see the [OSF repository](https://osf.io/z27sn/).