/* ============================================================
   MIT ANS SUMMER STRAVA CHALLENGE  —  WEEKLY DATA
   ============================================================
   THIS IS THE ONLY FILE YOU EDIT EACH WEEK.

   How to add a week:
     1. Copy one whole { ... } week block below.
     2. Paste it above the closing "];"
     3. Change the label (e.g. "Week 1") and remove example:true.
     4. Replace the athlete numbers.
     5. Save / commit. The site redeploys itself.

   Field guide (per athlete):
     name      - exactly as it appears in Strava (must match week to week)
     run_mi    - running distance, MILES
     swim_mi   - swimming distance, MILES
     cycle_mi  - cycling distance, MILES
     row_mi    - rowing distance, MILES
     time_sec  - TOTAL time across all four sports that week, in SECONDS

   Notes:
     • example:true  -> visible in the dropdown but NOT counted in
                        season totals or single-week records.
     • Miles = km ÷ 1.60934.  Seconds = h*3600 + m*60 + s.
     • Don't have a value? Use 0.
   ============================================================ */

const WEEKS = [
  {
    label: "Week 0",
    example: true,
    athletes: [
      { name: "Bryan Foo",          run_mi: 40.26, swim_mi: 0,    cycle_mi: 0,     row_mi: 0,     time_sec: 22680 },
      { name: "Abby Feyrer",        run_mi: 34.05, swim_mi: 0,    cycle_mi: 0,     row_mi: 0,     time_sec: 18796 },
      { name: "Leo Murphy",         run_mi: 26.66, swim_mi: 0,    cycle_mi: 0,     row_mi: 0,     time_sec: 19991 },
      { name: "Greta Hibbard",      run_mi: 15.6,  swim_mi: 1.37, cycle_mi: 13.48, row_mi: 0,     time_sec: 15658 },
      { name: "Taylor Hampson",     run_mi: 14.98, swim_mi: 1.3,  cycle_mi: 36.04, row_mi: 0,     time_sec: 19852 },
      { name: "Pavel Shilenko",     run_mi: 8.76,  swim_mi: 0,    cycle_mi: 0.87,  row_mi: 0,     time_sec: 4692  },
      { name: "Antoine Lucas",      run_mi: 6.21,  swim_mi: 0,    cycle_mi: 0,     row_mi: 0,     time_sec: 3030  },
      { name: "Jiyun Han",          run_mi: 4.6,   swim_mi: 0,    cycle_mi: 0,     row_mi: 0,     time_sec: 2523  },
      { name: "Brandon Aranda",     run_mi: 4.54,  swim_mi: 0,    cycle_mi: 0,     row_mi: 0,     time_sec: 2832  },
      { name: "Grégoire Biot",      run_mi: 3.29,  swim_mi: 0,    cycle_mi: 0,     row_mi: 0,     time_sec: 1870  },
      { name: "Ben Clark",          run_mi: 3.23,  swim_mi: 0,    cycle_mi: 0,     row_mi: 0,     time_sec: 1320  },
      { name: "Alessandro Persico", run_mi: 3.23,  swim_mi: 0,    cycle_mi: 0,     row_mi: 0,     time_sec: 1778  },
      { name: "Will Savage",        run_mi: 0,     swim_mi: 0,    cycle_mi: 0,     row_mi: 20.51, time_sec: 11580 }
    ]
  }

  ,{
    label: "Week 1",
    athletes: [
      { name: "Abby Feyrer",       run_mi: 39.71,  swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 22046 },
      { name: "Bryan Foo",         run_mi: 35.6,   swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 20227 },
      { name: "Leo Murphy",        run_mi: 13.48,  swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 9266 },
      { name: "Jiyun Han",         run_mi: 12.3,   swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 7029 },
      { name: "Antoine Lucas",     run_mi: 11.62,  swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 6152 },
      { name: "Jamie Dunsmore",    run_mi: 11.56,  swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 5692 },
      { name: "Olivia Stinson",    run_mi: 10.69,  swim_mi: 0,     cycle_mi: 0,      row_mi: 9.32,  time_sec: 10302 },
      { name: "Alessandro Persico",run_mi: 9.88,   swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 5438 },
      { name: "Greta Hibbard",     run_mi: 9.32,   swim_mi: 2.73,  cycle_mi: 0,      row_mi: 0,     time_sec: 11205 },
      { name: "Brandon Aranda",    run_mi: 7.46,   swim_mi: 0.68,  cycle_mi: 0,      row_mi: 0,     time_sec: 4905 },
      { name: "Pavel Shilenko",    run_mi: 6.59,   swim_mi: 0,     cycle_mi: 3.98,   row_mi: 0,     time_sec: 4931 },
      { name: "Taylor Hampson",    run_mi: 5.47,   swim_mi: 1.37,  cycle_mi: 39.83,  row_mi: 0,     time_sec: 16276 },
      { name: "Grégoire Biot",     run_mi: 5.28,   swim_mi: 0,     cycle_mi: 51.2,   row_mi: 0,     time_sec: 14962 },
      { name: "Abi k",             run_mi: 4.97,   swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 2424 },
      { name: "Erick Liang",       run_mi: 2.24,   swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 1444 },
      { name: "Petr Červenka",     run_mi: 0,      swim_mi: 0,     cycle_mi: 37.28,  row_mi: 0,     time_sec: 8213 }
    ]
  }

  ,{
    label: "Week 2",
    athletes: [
      { name: "Abby Feyrer",       run_mi: 40.58,  swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 21353 },
      { name: "Bryan Foo",         run_mi: 19.45,  swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 11769 },
      { name: "Grace Qiu",         run_mi: 16.71,  swim_mi: 0,     cycle_mi: 0,      row_mi: 23.98, time_sec: 30469 },
      { name: "Jiyun Han",         run_mi: 14.98,  swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 8676 },
      { name: "Leo Murphy",        run_mi: 13.48,  swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 8441 },
      { name: "Greta Hibbard",     run_mi: 13.17,  swim_mi: 3.23,  cycle_mi: 8.08,   row_mi: 0,     time_sec: 16671 },
      { name: "Pavel Shilenko",    run_mi: 12.18,  swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 6115 },
      { name: "Taylor Hampson",    run_mi: 12.05,  swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 5704 },
      { name: "Xavior Wang",       run_mi: 10.07,  swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 7322 },
      { name: "Brandon Aranda",    run_mi: 8.45,   swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 4910 },
      { name: "Alessandro Persico",run_mi: 7.83,   swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 4183 },
      { name: "Antoine Lucas",     run_mi: 5.1,    swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 2772 },
      { name: "Youyeon Choi",      run_mi: 3.73,   swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 2382 },
      { name: "Alina Jugan",       run_mi: 2.49,   swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 1800 },
      { name: "Petr Červenka",     run_mi: 0,      swim_mi: 0,     cycle_mi: 70.28,  row_mi: 0,     time_sec: 15720 },
      { name: "Grégoire Biot",     run_mi: 0,      swim_mi: 1.24,  cycle_mi: 40.39,  row_mi: 0,     time_sec: 12785 }
    ]
  }

  ,{
    label: "Week 3",
    athletes: [
      { name: "Abby Feyrer",       run_mi: 34.3,   swim_mi: 0.43,  cycle_mi: 0,      row_mi: 0,     time_sec: 19939 },
      { name: "Greta Hibbard",     run_mi: 26.41,  swim_mi: 1.74,  cycle_mi: 0,      row_mi: 0,     time_sec: 26730 },
      { name: "Olivia Stinson",    run_mi: 16.28,  swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 8934 },
      { name: "Jiyun Han",         run_mi: 13.73,  swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 8243 },
      { name: "Jamie Dunsmore",    run_mi: 13.48,  swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 5685 },
      { name: "Grace Qiu",         run_mi: 12.24,  swim_mi: 0,     cycle_mi: 0,      row_mi: 12.49, time_sec: 18272 },
      { name: "Antoine Lucas",     run_mi: 11.5,   swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 5976 },
      { name: "Taylor Hampson",    run_mi: 10.56,  swim_mi: 0.25,  cycle_mi: 8.02,   row_mi: 0,     time_sec: 12624 },
      { name: "Bryan Foo",         run_mi: 9.13,   swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 5645 },
      { name: "Abi k",             run_mi: 8.7,    swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 6972 },
      { name: "Leo Murphy",        run_mi: 5.84,   swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 3017 },
      { name: "Pavel Shilenko",    run_mi: 5.72,   swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 2751 },
      { name: "Alessandro Persico",run_mi: 4.78,   swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 2533 },
      { name: "Brandon Aranda",    run_mi: 2.73,   swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 1544 },
      { name: "Alina Jugan",       run_mi: 0.99,   swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 754 },
      { name: "Petr Červenka",     run_mi: 0,      swim_mi: 0,     cycle_mi: 82.33,  row_mi: 0,     time_sec: 18137 }
    ]
  }

  ,{
    label: "Week 4",
    athletes: [
      { name: "Greta Hibbard", run_mi: 21.75,  swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 13755 },
      { name: "Jiyun Han",     run_mi: 21.75,  swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 12530 },
      { name: "Antoine Lucas", run_mi: 19.82,  swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 11101 },
      { name: "Grace Qiu",     run_mi: 14.17,  swim_mi: 0.99,  cycle_mi: 27.15,  row_mi: 6.4,   time_sec: 24208 },
      { name: "Leo Murphy",    run_mi: 13.42,  swim_mi: 0,     cycle_mi: 6.28,   row_mi: 0,     time_sec: 9772 },
      { name: "Taylor Hampson",run_mi: 12.8,   swim_mi: 1.3,   cycle_mi: 4.04,   row_mi: 0,     time_sec: 10810 },
      { name: "Bryan Foo",     run_mi: 10.56,  swim_mi: 0,     cycle_mi: 7.27,   row_mi: 0,     time_sec: 8898 },
      { name: "Abi k",         run_mi: 7.33,   swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 3929 },
      { name: "Jamie Dunsmore",run_mi: 5.97,   swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 3350 },
      { name: "Grégoire Biot", run_mi: 5.03,   swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 2859 },
      { name: "Pavel Shilenko",run_mi: 4.41,   swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 2073 },
      { name: "Youyeon Choi",  run_mi: 3.11,   swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 2255 },
      { name: "Brandon Aranda",run_mi: 0.93,   swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 556 },
      { name: "Petr Červenka", run_mi: 0,      swim_mi: 1.24,  cycle_mi: 56.54,  row_mi: 0,     time_sec: 17421 }
    ]
  }
  ,{
    label: "Week 5",
    athletes: [
      { name: "Abby Feyrer",       run_mi: 31.75,  swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 17885 },
      { name: "Grace Qiu",         run_mi: 9.51,   swim_mi: 0,     cycle_mi: 0,      row_mi: 11.43, time_sec: 12700 },
      { name: "Taylor Hampson",    run_mi: 9.44,   swim_mi: 1.55,  cycle_mi: 27.71,  row_mi: 0,     time_sec: 14926 },
      { name: "Jamie Dunsmore",    run_mi: 6.46,   swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 2465 },
      { name: "Leo Murphy",        run_mi: 5.97,   swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 3936 },
      { name: "Grégoire Biot",     run_mi: 5.9,    swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 3325 },
      { name: "Antoine Lucas",     run_mi: 5.47,   swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 3080 },
      { name: "Brandon Aranda",    run_mi: 4.1,    swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 2244 },
      { name: "Jiyun Han",         run_mi: 3.98,   swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 2515 },
      { name: "Olivia Stinson",    run_mi: 3.67,   swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 2738 },
      { name: "Greta Hibbard",     run_mi: 3.23,   swim_mi: 0.75,  cycle_mi: 31.69,  row_mi: 0,     time_sec: 14607 },
      { name: "Alessandro Persico",run_mi: 3.23,   swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 2491 },
      { name: "Youyeon Choi",      run_mi: 3.23,   swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 2205 },
      { name: "Bryan Foo",         run_mi: 2.05,   swim_mi: 0,     cycle_mi: 0,      row_mi: 0,     time_sec: 1234 },
      { name: "Petr Červenka",     run_mi: 0,      swim_mi: 1.18,  cycle_mi: 56.36,  row_mi: 0,     time_sec: 17392 },
      { name: "Abi k",             run_mi: 0,      swim_mi: 0,     cycle_mi: 7.95,   row_mi: 0,     time_sec: 2451 }
    ]
  }
];
