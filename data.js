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

  /* ---- To add the first real week, uncomment and fill in: ----
  ,{
    label: "Week 1",
    athletes: [
      { name: "Bryan Foo", run_mi: 0, swim_mi: 0, cycle_mi: 0, row_mi: 0, time_sec: 0 }
      // ...one line per athlete
    ]
  }
  */
];
