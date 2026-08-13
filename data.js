/* ============================================================
   MIT ANS SUMMER STRAVA CHALLENGE  —  WEEKLY DATA
   ============================================================
   THIS IS THE ONLY FILE YOU EDIT EACH WEEK.

   How to add a week:
     1. Copy one whole { ... } week block below.
     2. Paste it above the closing "];"
     3. Change the label (e.g. "Week 6") and remove example:true.
     4. Replace the athlete numbers.
     5. Save / commit. The site redeploys itself.

   Field guide (per athlete):
     name       - exactly as in Strava (must match week to week)
     run_mi / swim_mi / cycle_mi / row_mi   - distance per sport, MILES
     run_sec / swim_sec / cycle_sec / row_sec - TIME per sport, SECONDS
       (each sport's own time, read from that sport's Strava board;
        total time = the four *_sec added together, done automatically)

   Notes:
     • example:true -> shown in dropdown but NOT counted in totals/records.
     • Miles = km / 1.60934.  Seconds = h*3600 + m*60 + s.
     • No value? Use 0.
   ============================================================ */

const WEEKS = [
  {
    label: "Week 0",
    example: true,
    athletes: [
      { name: "Bryan Foo", run_mi: 40.26, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 22680, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Abby Feyrer", run_mi: 34.05, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 18796, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Leo Murphy", run_mi: 26.66, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 19991, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Greta Hibbard", run_mi: 15.6, swim_mi: 1.37, cycle_mi: 13.48, row_mi: 0, run_sec: 15658, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Taylor Hampson", run_mi: 14.98, swim_mi: 1.3, cycle_mi: 36.04, row_mi: 0, run_sec: 19852, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Pavel Shilenko", run_mi: 8.76, swim_mi: 0, cycle_mi: 0.87, row_mi: 0, run_sec: 4692, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Antoine Lucas", run_mi: 6.21, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 3030, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Jiyun Han", run_mi: 4.6, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 2523, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Brandon Aranda", run_mi: 4.54, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 2832, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Grégoire Biot", run_mi: 3.29, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 1870, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Ben Clark", run_mi: 3.23, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 1320, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Alessandro Persico", run_mi: 3.23, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 1778, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Will Savage", run_mi: 0, swim_mi: 0, cycle_mi: 0, row_mi: 20.51, run_sec: 0, swim_sec: 0, cycle_sec: 0, row_sec: 11580 }
    ]
  },
  {
    label: "Week 1",
    athletes: [
      { name: "Abby Feyrer", run_mi: 39.71, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 22046, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Bryan Foo", run_mi: 35.6, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 20227, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Leo Murphy", run_mi: 13.48, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 9266, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Jiyun Han", run_mi: 12.3, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 7029, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Antoine Lucas", run_mi: 11.62, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 6152, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Jamie Dunsmore", run_mi: 11.56, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 5692, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Olivia Stinson", run_mi: 10.69, swim_mi: 0, cycle_mi: 0, row_mi: 9.32, run_sec: 5022, swim_sec: 0, cycle_sec: 0, row_sec: 5280 },
      { name: "Alessandro Persico", run_mi: 9.88, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 5438, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Greta Hibbard", run_mi: 9.32, swim_mi: 2.73, cycle_mi: 0, row_mi: 0, run_sec: 4905, swim_sec: 6300, cycle_sec: 0, row_sec: 0 },
      { name: "Brandon Aranda", run_mi: 7.46, swim_mi: 0.68, cycle_mi: 0, row_mi: 0, run_sec: 4008, swim_sec: 897, cycle_sec: 0, row_sec: 0 },
      { name: "Pavel Shilenko", run_mi: 6.59, swim_mi: 0, cycle_mi: 3.98, row_mi: 0, run_sec: 3434, swim_sec: 0, cycle_sec: 1496, row_sec: 0 },
      { name: "Taylor Hampson", run_mi: 5.47, swim_mi: 1.37, cycle_mi: 39.83, row_mi: 0, run_sec: 2702, swim_sec: 3628, cycle_sec: 9947, row_sec: 0 },
      { name: "Grégoire Biot", run_mi: 5.28, swim_mi: 0, cycle_mi: 51.2, row_mi: 0, run_sec: 3000, swim_sec: 0, cycle_sec: 11961, row_sec: 0 },
      { name: "Abi k", run_mi: 4.97, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 2424, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Erick Liang", run_mi: 2.24, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 1444, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Petr Červenka", run_mi: 0, swim_mi: 0, cycle_mi: 37.28, row_mi: 0, run_sec: 0, swim_sec: 0, cycle_sec: 8213, row_sec: 0 }
    ]
  },
  {
    label: "Week 2",
    athletes: [
      { name: "Abby Feyrer", run_mi: 40.58, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 21353, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Bryan Foo", run_mi: 19.45, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 11769, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Grace Qiu", run_mi: 16.71, swim_mi: 0, cycle_mi: 0, row_mi: 23.98, run_sec: 9469, swim_sec: 0, cycle_sec: 0, row_sec: 21000 },
      { name: "Jiyun Han", run_mi: 14.98, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 8676, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Leo Murphy", run_mi: 13.48, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 8441, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Greta Hibbard", run_mi: 13.17, swim_mi: 3.23, cycle_mi: 8.08, row_mi: 0, run_sec: 7378, swim_sec: 7500, cycle_sec: 1793, row_sec: 0 },
      { name: "Pavel Shilenko", run_mi: 12.18, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 6115, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Taylor Hampson", run_mi: 12.05, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 5704, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Xavior Wang", run_mi: 10.07, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 7322, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Brandon Aranda", run_mi: 8.45, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 4910, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Alessandro Persico", run_mi: 7.83, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 4183, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Antoine Lucas", run_mi: 5.1, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 2772, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Youyeon Choi", run_mi: 3.73, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 2382, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Alina Jugan", run_mi: 2.49, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 1800, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Petr Červenka", run_mi: 0, swim_mi: 0, cycle_mi: 70.28, row_mi: 0, run_sec: 0, swim_sec: 0, cycle_sec: 15720, row_sec: 0 },
      { name: "Grégoire Biot", run_mi: 0, swim_mi: 1.24, cycle_mi: 40.39, row_mi: 0, run_sec: 0, swim_sec: 2100, cycle_sec: 10685, row_sec: 0 }
    ]
  },
  {
    label: "Week 3",
    athletes: [
      { name: "Abby Feyrer", run_mi: 34.3, swim_mi: 0.43, cycle_mi: 0, row_mi: 0, run_sec: 17719, swim_sec: 2220, cycle_sec: 0, row_sec: 0 },
      { name: "Greta Hibbard", run_mi: 26.41, swim_mi: 1.74, cycle_mi: 0, row_mi: 0, run_sec: 21930, swim_sec: 4800, cycle_sec: 0, row_sec: 0 },
      { name: "Olivia Stinson", run_mi: 16.28, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 8934, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Jiyun Han", run_mi: 13.73, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 8243, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Jamie Dunsmore", run_mi: 13.48, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 5685, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Grace Qiu", run_mi: 12.24, swim_mi: 0, cycle_mi: 0, row_mi: 12.49, run_sec: 7112, swim_sec: 0, cycle_sec: 0, row_sec: 11160 },
      { name: "Antoine Lucas", run_mi: 11.5, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 5976, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Taylor Hampson", run_mi: 10.56, swim_mi: 0.25, cycle_mi: 8.02, row_mi: 0, run_sec: 10064, swim_sec: 420, cycle_sec: 2140, row_sec: 0 },
      { name: "Bryan Foo", run_mi: 9.13, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 5645, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Abi k", run_mi: 8.7, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 6972, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Leo Murphy", run_mi: 5.84, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 3017, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Pavel Shilenko", run_mi: 5.72, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 2751, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Alessandro Persico", run_mi: 4.78, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 2533, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Brandon Aranda", run_mi: 2.73, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 1544, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Alina Jugan", run_mi: 0.99, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 754, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Petr Červenka", run_mi: 0, swim_mi: 0, cycle_mi: 82.33, row_mi: 0, run_sec: 0, swim_sec: 0, cycle_sec: 18137, row_sec: 0 }
    ]
  },
  {
    label: "Week 4",
    athletes: [
      { name: "Greta Hibbard", run_mi: 21.75, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 13755, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Jiyun Han", run_mi: 21.75, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 12530, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Antoine Lucas", run_mi: 19.82, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 11101, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Grace Qiu", run_mi: 14.17, swim_mi: 0.99, cycle_mi: 27.15, row_mi: 6.4, run_sec: 8231, swim_sec: 1860, cycle_sec: 7637, row_sec: 6480 },
      { name: "Leo Murphy", run_mi: 13.42, swim_mi: 0, cycle_mi: 6.28, row_mi: 0, run_sec: 7582, swim_sec: 0, cycle_sec: 2190, row_sec: 0 },
      { name: "Taylor Hampson", run_mi: 12.8, swim_mi: 1.3, cycle_mi: 4.04, row_mi: 0, run_sec: 6221, swim_sec: 3480, cycle_sec: 1109, row_sec: 0 },
      { name: "Bryan Foo", run_mi: 10.56, swim_mi: 0, cycle_mi: 7.27, row_mi: 0, run_sec: 7106, swim_sec: 0, cycle_sec: 1792, row_sec: 0 },
      { name: "Abi k", run_mi: 7.33, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 3929, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Jamie Dunsmore", run_mi: 5.97, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 3350, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Grégoire Biot", run_mi: 5.03, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 2859, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Pavel Shilenko", run_mi: 4.41, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 2073, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Youyeon Choi", run_mi: 3.11, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 2255, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Brandon Aranda", run_mi: 0.93, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 556, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Petr Červenka", run_mi: 0, swim_mi: 1.24, cycle_mi: 56.54, row_mi: 0, run_sec: 0, swim_sec: 3540, cycle_sec: 13881, row_sec: 0 }
    ]
  },
  {
    label: "Week 5",
    athletes: [
      { name: "Abby Feyrer", run_mi: 31.75, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 17885, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Grace Qiu", run_mi: 9.51, swim_mi: 0, cycle_mi: 0, row_mi: 11.43, run_sec: 5080, swim_sec: 0, cycle_sec: 0, row_sec: 7620 },
      { name: "Taylor Hampson", run_mi: 9.44, swim_mi: 1.55, cycle_mi: 27.71, row_mi: 0, run_sec: 3891, swim_sec: 4260, cycle_sec: 6775, row_sec: 0 },
      { name: "Jamie Dunsmore", run_mi: 6.46, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 2465, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Leo Murphy", run_mi: 5.97, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 3936, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Grégoire Biot", run_mi: 5.9, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 3325, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Antoine Lucas", run_mi: 5.47, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 3080, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Brandon Aranda", run_mi: 4.1, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 2244, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Jiyun Han", run_mi: 3.98, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 2515, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Olivia Stinson", run_mi: 3.67, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 2738, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Greta Hibbard", run_mi: 3.23, swim_mi: 0.75, cycle_mi: 31.69, row_mi: 0, run_sec: 1955, swim_sec: 2100, cycle_sec: 10552, row_sec: 0 },
      { name: "Alessandro Persico", run_mi: 3.23, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 2491, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Youyeon Choi", run_mi: 3.23, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 2205, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Bryan Foo", run_mi: 2.05, swim_mi: 0, cycle_mi: 0, row_mi: 0, run_sec: 1234, swim_sec: 0, cycle_sec: 0, row_sec: 0 },
      { name: "Petr Červenka", run_mi: 0, swim_mi: 1.18, cycle_mi: 56.36, row_mi: 0, run_sec: 0, swim_sec: 2880, cycle_sec: 14512, row_sec: 0 },
      { name: "Abi k", run_mi: 0, swim_mi: 0, cycle_mi: 7.95, row_mi: 0, run_sec: 0, swim_sec: 0, cycle_sec: 2451, row_sec: 0 }
    ]
  }
];

/* ============================================================
   NSE vs AeroAstro COMPETITION  (Weeks 6-8)
   ============================================================
   Everyone counts as NSE by default. List AeroAstro athletes'
   names below (exactly as in Strava) — anyone on this list is
   AeroAstro; everyone else is NSE.
   ============================================================ */
const AEROASTRO = [
  // "Firstname Lastname",
];

const COMPETITION_WEEKS = ["Week 6", "Week 7", "Week 8"];
