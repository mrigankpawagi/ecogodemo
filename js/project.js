const citations = ["Jory MacKay in RescueTime:blog - <a href='https://blog.rescuetime.com/single-tasking/'>Single-tasking: How to focus on one thing at a time, get more done, and feel less stressed</a>.",
    "Ilies, Remus & Huth, Megan & Ryan, Ann & Dimotakis, Nikolaos. (2015). Explaining the Links Between Workload, Distress, and Work-Family Conflict Among School Employees: Physical, Cognitive, and Emotional Fatigue. Journal of Educational Psychology. 107. 1136-1149. 10.1037/edu0000029.",
    "As suggested by my survey which has been discussed later.",
    "According to the evaluation model described later.",
    "Where 0 corresponds to very low and 100% corresponds to very high.",
    "On the same scale as Task Metrics.",
    "The survey can be found at <a href='http://bit.ly/3cuy0Au'>bit.ly/3cuy0Au</a> and the raw data is available at <a href='https://bit.ly/2OcJTCs'>bit.ly/2OcJTCs</a>.",
    "This is also suggested in a study by Rosekind, Mark R. PhD; Gregory, Kevin B. BS; Mallis, Melissa M. PhD; Brandt, Summer L. MA; Seal, Brian PhD; Lerner, Debra PhD - <a href='https://journals.lww.com/joem/Abstract/2010/01000/The_Cost_of_Poor_Sleep__Workplace_Productivity.13.aspx?utm_source=zapier.com&utm_medium=referral&utm_campaign=zapier'>The Cost of Poor Sleep: Workplace Productivity Loss and Associated Costs</a>.",
    "The smallest unit of time processed by the algorithm is currently 1 minute.",
    "\\(1 \\text{ day} =\\) \\( 24 \\text{ hours} =\\) \\( 24 \\times 60 \\text{ minutes} =\\) \\( 1440 \\text{ minutes}\\).",
    "Unless stated otherwise, the data in each function is related to the task occurring at each particular minute.",
    "Based on the discussion in <i>Rationale for choice of Metrics and Parameters</i>.",
    "It should be noted that plots for real users are almost never continuous, unlike the plot in this example.",
    "<a href='https://kronologue-ai.web.app/'>Kronologue</a> is also under active development."
];

const cites = $("sup[data-cite]");
for (var x = 0; x < cites.length; x++) {
    $(cites[x]).text(x + 1);
    $("#citations").append("<li>" + citations[$(cites[x]).attr('data-cite')] + "</li>");
}

window.MathJax = {
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']]
    }
  };