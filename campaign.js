'use strict';
// Fictional puzzle evidence; all rules needed to solve each gate are provided.
const CHAPTERS = [
  {
    "dir": "boot",
    "name": "Wake signal",
    "difficulty": "Easy",
    "subtitle": "Learn the shell. Find your first signal.",
    "message": "M. / Start small. Ten levels stand between this shell and the outside.",
    "files": {
      "readme.txt": "LEVEL 01 / 10 — EASY\n\nNULL / TEN LEVEL DESCENT\nTen levels, two gates each. Difficulty rises from Easy to Insane.\n\nType ls to list files. Type cat <filename> to read one.\nType solve <answer> to submit the current gate. Answers ignore case.\nType status for the current objective, map for all ten levels.\n\nGate 1: read signal.txt. The first letter of each of its four lines forms a word. Submit that word.\nGate 2: read startup.log and order its three code digits from earliest time to latest. Submit three digits without spaces.\n\nWrong answers have no penalty. hint gives a nudge; hint reveal explicitly reveals a solution. Progress saves automatically.",
      "signal.txt": "Wake before the lights return.\nA voice is waiting in the static.\nKeep the first thing you see.\nEverything starts somewhere.",
      "startup.log": "All times are on the same day.\n09:03  code digit=4\n09:01  code digit=3\n09:02  code digit=1"
    },
    "puzzles": [
      {
        "title": "Hear the wake signal",
        "brief": "Read signal.txt and take each line’s first letter.",
        "answer": "wake",
        "hints": [
          "Read with cat signal.txt. You only need four letters.",
          "The lines begin W, A, K, E.",
          "solve wake"
        ],
        "reward": "First signal recovered. You can read the system."
      },
      {
        "title": "Put the startup in order",
        "brief": "Read startup.log; order its digits by timestamp.",
        "answer": "314",
        "hints": [
          "The file is not in chronological order.",
          "09:01 comes first, then 09:02, then 09:03.",
          "solve 314"
        ],
        "reward": "Boot sequence verified. Operator records are mounted."
      }
    ]
  },
  {
    "dir": "recovery",
    "name": "Cold boot",
    "subtitle": "Find the voice beneath the system.",
    "message": "M. / That escape was a sandbox. You opened a door into a bigger cage. This time, we go all the way down.",
    "files": {
      "readme.txt": "LEVEL 02 / 10 — EASY+\n\nNULL / SECOND DESCENT\nYour first escape only released a simulation. Ten levels form the descent.\n\nUse ls, cd, cat and grep to investigate. solve <answer> submits the CURRENT objective. Type status for that objective.\nEach partition has two gates; both must clear before the next opens.\n\nGate 1: find the genuine recovery operator in roster.csv. A valid operator passes EVERY rule in policy.txt. Submit the operator's name.\nGate 2: decrypt dispatch.enc with the shift described in the recovered handover.txt.\n\nKeep discoveries with note <text>; review with notes.",
      "policy.txt": "RECOVERY OPERATOR POLICY\n1. Clearance must be at least 4.\n2. Last login must be strictly BEFORE the outage at 02:30.\n3. The record must have signature VALID.\n4. Automated accounts (names beginning svc_) cannot recover the system.\nAll timestamps belong to the same day.",
      "roster.csv": "name,clearance,last_login,signature\nvale,5,02:41,VALID\niris,4,02:17,VALID\nnoor,3,01:52,VALID\nsable,6,01:48,REVOKED\nsvc_elm,7,02:02,VALID\nrowan,4,02:30,VALID",
      "handover.txt": "IRIS / HANDOVER\nThe relay moved every letter FORWARD by the number of failed boots.\nFailed boots: 4. Wrap around the alphabet. Spaces remain unchanged.\nTo read the dispatch, reverse the relay's change.\nExample: with a forward shift of 1, A was stored as B.",
      "dispatch.enc": "WII O FIPSA\n\nTransport note: a space was inserted after the third character of the first word. Remove that extra space after decrypting. Submit the original two-word instruction."
    },
    "puzzles": [
      {
        "title": "Identify the real operator",
        "brief": "Cross-check roster.csv against every rule in policy.txt.",
        "answer": "iris",
        "hints": [
          "High clearance alone does not make an account valid.",
          "Check the outage boundary carefully: BEFORE excludes 02:30. Automated accounts are excluded too.",
          "solve iris"
        ],
        "reward": "Operator IRIS authenticated. The handover is genuine."
      },
      {
        "title": "Recover the dispatch",
        "brief": "Reverse the relay shift and repair the inserted space.",
        "answer": "seek below",
        "hints": [
          "handover.txt explains both the direction and size of the letter shift.",
          "Move each stored letter four places backward: W becomes S. The transport note explains the stray space.",
          "solve seek below"
        ],
        "reward": "Dispatch recovered: SEEK BELOW. Your shell can now inspect running processes."
      }
    ],
    "difficulty": "Easy+"
  },
  {
    "dir": "watcher",
    "name": "Someone is listening",
    "subtitle": "Find the process that should not exist.",
    "message": "M. / One of these processes is reporting us. Don’t trust its name. Trust what it does.",
    "files": {
      "readme.txt": "LEVEL 03 / 10 — NORMAL\n\nGate 1: identify the watcher PID by correlating processes.csv, sockets.log and watchdog.txt. Submit only the numeric PID.\nGate 2: restore access with the exact three-digit permission mode described in access.txt.",
      "watchdog.txt": "The watcher satisfies ALL of these:\n- Its parent process belongs to root.\n- It has an ESTABLISHED connection to 198.51.100.9.\n- Its resident memory is greater than 64 MB.\n- Its name is not a reliable identifier.\nThe documentation IP is fictional within this simulation.",
      "processes.csv": "pid,parent,user,name,memory_mb\n1,0,root,init,12\n110,1,root,supervisor,48\n205,1,guest,session,32\n317,205,guest,watcher,96\n422,110,guest,cache,80\n508,110,root,telemetry,64\n611,205,root,indexer,128",
      "sockets.log": "PID 317 -> 198.51.100.9 ESTABLISHED\nPID 422 -> 198.51.100.9 ESTABLISHED\nPID 508 -> 198.51.100.9 ESTABLISHED\nPID 611 -> 198.51.100.9 ESTABLISHED\nPID 110 -> 198.51.100.9 LISTEN",
      "access.txt": "Permissions are three digits: OWNER / GROUP / OTHER.\nWithin each digit, add read=4, write=2, execute=1.\n\nOwner: must read, write and execute.\nGroup: must read and execute, but never write.\nOther: may execute only.\nDo not grant any extra permission.",
      "intercept.txt": "WATCHER MEMO\n“Subject believes M. is external. Maintain this belief.”\n\nM. / I am not external. I am the version of you they failed to erase."
    },
    "puzzles": [
      {
        "title": "Isolate the watcher",
        "brief": "Correlate parent ownership, socket state and memory.",
        "answer": "422",
        "hints": [
          "A process’s own user is not necessarily its parent’s user.",
          "PID 611 is owned by root, but its parent 205 belongs to guest. Exactly 64 MB also fails the memory rule.",
          "solve 422"
        ],
        "reward": "Watcher 422 isolated. Your shell is no longer being mirrored."
      },
      {
        "title": "Restore least-privilege access",
        "brief": "Construct the exact owner/group/other permission mode.",
        "answer": "751",
        "hints": [
          "Add the permission weights separately for each of the three roles.",
          "Owner is 4+2+1. Group is 4+1. Other is 1.",
          "solve 751"
        ],
        "reward": "Access restored. You can recover the damaged memory archive."
      }
    ],
    "difficulty": "Normal"
  },
  {
    "dir": "archive",
    "name": "The missing days",
    "subtitle": "Memory is a poor witness. Records are worse.",
    "message": "M. / They cut up my memories and called it maintenance. Rebuild what they left.",
    "files": {
      "readme.txt": "LEVEL 04 / 10 — CHALLENGING\n\nGate 1: use coordinates.key and memory.txt to find the archive password. Submit the decoded word.\nGate 2: recover the missing shard using parity.txt and shards.bin. Submit exactly eight binary digits.",
      "coordinates.key": "Format: line.word.character. All positions start at 1.\nIgnore the line-number labels in memory.txt. Words split on spaces. No punctuation is part of the text.\n\n2.2.1 / 1.3.2 / 4.1.3 / 3.4.1 / 5.3.1",
      "memory.txt": "1 | we carry small fires\n2 | no echo returns home\n3 | the vault remembers everything\n4 | ember under empty skies\n5 | let the rest remain",
      "parity.txt": "Four 8-bit data shards were protected by one XOR parity shard.\nXOR is 1 when the two input bits differ and 0 when they match.\nFor each column: parity = A XOR B XOR C XOR D.\nRecover D from the parity and the three surviving data shards.\nWork column by column; keep leading zeroes.",
      "shards.bin": "A       10110100\nB       01101001\nC       11000011\nD       ????????\nPARITY  01001000"
    },
    "puzzles": [
      {
        "title": "Read between the memories",
        "brief": "Use the coordinate key to extract five characters.",
        "answer": "ember",
        "hints": [
          "Every coordinate has three parts. The final part selects a character, not a word.",
          "2.2.1 points to the first character of “echo”: E. Continue in the key’s order.",
          "solve ember"
        ],
        "reward": "Memory index unlocked. The parity shard is intact."
      },
      {
        "title": "Rebuild the missing shard",
        "brief": "Recover D using the three survivors and their XOR parity.",
        "answer": "01010110",
        "hints": [
          "XOR can undo itself. D = PARITY XOR A XOR B XOR C.",
          "For each column count the 1s across PARITY, A, B and C. Odd count gives 1; even gives 0.",
          "solve 01010110"
        ],
        "reward": "Memory shard restored. M. was not an employee. M. was an instance."
      }
    ],
    "difficulty": "Challenging"
  },
  {
    "dir": "relay",
    "name": "Dead air",
    "subtitle": "A message is hiding in the noise.",
    "message": "M. / The obvious route is watched. Find the path the watcher cannot use.",
    "files": {
      "readme.txt": "LEVEL 05 / 10 — HARD\n\nGate 1: route a message from S to X using links.csv. Follow routing.txt. Submit the full route, separated by hyphens (example S-A-X).\nGate 2: recover the payload from packets.log under protocol.txt. Submit the resulting word.",
      "routing.txt": "Only use OPEN links. Links are one-way.\nThe packet must visit C, then E, in that order.\nA node may not be visited twice.\nTotal latency must be at most 12ms.\nAmong qualifying routes, choose the lowest total latency.",
      "links.csv": "from,to,latency,status\nS,A,2,OPEN\nS,B,1,OPEN\nA,C,3,OPEN\nB,C,5,OPEN\nC,D,1,OPEN\nD,E,2,OPEN\nC,E,4,OPEN\nE,X,3,OPEN\nB,E,1,OPEN\nA,X,2,CLOSED\nD,X,1,OPEN",
      "protocol.txt": "Packet checksum = (sequence number + payload's alphabet position) mod 10. A=1 ... Z=26.\nOnly checksum-valid packets belong to the message.\nUse one valid packet per sequence. Assemble in increasing sequence order.\nExample: sequence 2, letter C => (2+3) mod 10 = 5.",
      "packets.log": "seq=4 payload=O checksum=9\nseq=1 payload=S checksum=2\nseq=3 payload=H checksum=1\nseq=2 payload=T checksum=7\nseq=1 payload=E checksum=6\nseq=4 payload=P checksum=9\nseq=2 payload=C checksum=5\nseq=3 payload=A checksum=8"
    },
    "puzzles": [
      {
        "title": "Route around the watcher",
        "brief": "Find the fastest legal route from S to X.",
        "answer": "s-a-c-d-e-x",
        "hints": [
          "The short route through B-E skips a required checkpoint.",
          "Compare S-A-C-D-E-X (11ms) with routes through B or directly from C to E.",
          "solve s-a-c-d-e-x"
        ],
        "reward": "Clean route established. Packet capture recovered."
      },
      {
        "title": "Reassemble the transmission",
        "brief": "Reject damaged packets before ordering their payloads.",
        "answer": "echo",
        "hints": [
          "Sorting every row is not enough. Validate each checksum first.",
          "For sequence 1, E has position 5: (1+5) mod 10 is 6. Repeat for the other sequences.",
          "solve echo"
        ],
        "reward": "ECHO acknowledged. A clock audit is now accessible."
      }
    ],
    "difficulty": "Hard"
  },
  {
    "dir": "clock",
    "name": "Borrowed time",
    "subtitle": "The logs agree. Their clocks do not.",
    "message": "M. / The sequence is real. The timestamps are lies. Put the last minute back together.",
    "files": {
      "readme.txt": "LEVEL 06 / 10 — HARD+\n\nGate 1: normalize events.log using offsets.txt. Order the event tokens by real time, earliest first. Submit the four tokens joined by hyphens.\nGate 2: order the recovery jobs in jobs.txt. Submit their names joined by hyphens.",
      "offsets.txt": "Displayed clock = real time + offset.\nALPHA is 2 minutes FAST.\nBETA is 1 minute SLOW.\nGAMMA is accurate.\nAll events occur on the same day.",
      "events.log": "ALPHA  12:02:30  token=ash\nBETA   11:59:50  token=glass\nGAMMA  12:00:40  token=rain\nALPHA  12:02:10  token=seed",
      "jobs.txt": "Jobs: mount, verify, index, decrypt, export.\n- mount must run before every other job.\n- verify requires mount.\n- index requires verify.\n- decrypt requires verify.\n- export requires index AND decrypt.\nWhen more than one job is eligible, choose the alphabetically first job.\nRun each job once.",
      "receipt.txt": "RECOVERY RECEIPT\nRemember these two anchors for the final seal:\nThe restored relay's payload.\nThe watcher PID.\nYou can revisit all previously opened partitions."
    },
    "puzzles": [
      {
        "title": "Reconstruct the real timeline",
        "brief": "Correct the clock offsets before sorting the events.",
        "answer": "seed-ash-rain-glass",
        "hints": [
          "A fast clock shows a later time than reality. Subtract its offset.",
          "ALPHA 12:02:10 becomes 12:00:10; BETA 11:59:50 becomes 12:00:50.",
          "solve seed-ash-rain-glass"
        ],
        "reward": "Timeline reconciled. The deletion happened after your backup."
      },
      {
        "title": "Schedule the recovery jobs",
        "brief": "Respect dependencies and the alphabetical tie-break.",
        "answer": "mount-verify-decrypt-index-export",
        "hints": [
          "After mount and verify, two jobs become eligible at once.",
          "The tie-break is alphabetical, so decrypt comes before index. Export waits for both.",
          "solve mount-verify-decrypt-index-export"
        ],
        "reward": "Recovery order verified. The quarantine scheduler is reachable."
      }
    ],
    "difficulty": "Hard+"
  },
  {
    "dir": "quarantine",
    "name": "Resource deadlock",
    "difficulty": "Expert",
    "subtitle": "Every running job competes for the same memory.",
    "message": "M. / The scheduler is deterministic. The crashes were not.",
    "files": {
      "readme.txt": "LEVEL 07 / 10 — EXPERT\n\nGate 1: simulate jobs.csv using scheduler.txt. Submit job IDs in COMPLETION order, joined by hyphens.\nGate 2: replay transactions.log using ledger.txt. Submit the final committed balance as a decimal integer.",
      "scheduler.txt": "Two workers; at most two jobs run together. Total memory capacity: 6 units.\nAt time 0 and each completion time, release ALL completed jobs and their memory.\nThen scan waiting jobs alphabetically and start every eligible job that fits free memory AND an idle worker. Continue the scan even when an earlier job does not fit.\nDependencies must have COMPLETED. Jobs run uninterrupted for their duration.\nIf completions tie, list the tied IDs alphabetically.\nIf nothing can start, advance to the next completion.\nAll jobs run once.",
      "jobs.csv": "id,duration,memory,requires\na,3,2,-\nb,4,4,-\nc,5,3,a\nd,2,2,a+b\ne,3,4,c+d\nf,2,2,d",
      "ledger.txt": "Initial committed balance: 120.\nSort records by sequence. Each BEGIN snapshots the CURRENT committed balance and opens a private copy.\nADD changes only that transaction’s private copy.\nCOMMIT replaces the committed balance with the ENTIRE private copy; it does not add a delta.\nROLLBACK discards the private copy. Still-open transactions do not affect the result.\nA later commit may overwrite another transaction’s changes. Ignore wall-clock times; sequence is authoritative.",
      "transactions.log": "seq=8 COMMIT C\nseq=2 ADD A -35\nseq=11 BEGIN D\nseq=5 COMMIT A\nseq=1 BEGIN A\nseq=9 COMMIT B\nseq=6 BEGIN C\nseq=4 ADD B 20\nseq=12 ADD D -60\nseq=7 ADD C 15\nseq=3 BEGIN B\nseq=10 BEGIN E\nseq=13 ADD E 90\nseq=14 ROLLBACK E"
    },
    "puzzles": [
      {
        "title": "Resolve the resource deadlock",
        "brief": "Simulate two workers with a shared six-unit memory limit.",
        "answer": "a-b-d-f-c-e",
        "hints": [
          "Track running jobs, used memory, and the next completion time. A free worker does not guarantee enough memory.",
          "A and B start at 0. A ends at 3, but C must wait until B ends at 4. C and D then start together.",
          "solve a-b-d-f-c-e"
        ],
        "reward": "Scheduler recovered. All jobs complete at time 12."
      },
      {
        "title": "Recover the committed ledger",
        "brief": "Replay snapshots and commits, not just the sum of changes.",
        "answer": "140",
        "hints": [
          "A transaction keeps the balance it saw at BEGIN, even when another transaction commits later.",
          "B begins while the committed balance is still 120. Its private balance becomes 140. Its commit at sequence 9 overwrites C’s earlier commit.",
          "solve 140"
        ],
        "reward": "Committed balance restored: 140. A forged rollback hid the overwrite."
      }
    ]
  },
  {
    "dir": "lattice",
    "name": "Permutation lock",
    "difficulty": "Expert+",
    "subtitle": "Every position constrains every other.",
    "message": "M. / The key is not written down. It is the only arrangement that survives all six rules.",
    "files": {
      "readme.txt": "LEVEL 08 / 10 — EXPERT+\n\nGate 1: solve constraints.txt. Submit six digits, including any leading zero.\nGate 2: restore the message in blocks.txt using transform.txt, this level’s key, and the missing shard recovered in /archive. Submit the twelve letters with no spaces.",
      "constraints.txt": "The key uses digits 0,1,2,3,4,5 exactly once. Positions p1 through p6 are counted from the LEFT.\n1. p1 + p6 = 5\n2. p2 < p5\n3. p3 = p1 + 1\n4. p4 + p5 = 6\n5. p2 + p4 = 5\n6. As a decimal integer, the key leaves remainder 5 when divided by 7. Leading zeroes do not affect its integer value.\nExample of remainder: 19 = 2*7+5, so its remainder is 5.\nAll six rules must hold.",
      "transform.txt": "The original message was split into six two-letter blocks indexed 0 through 5.\nThe permutation key lists which ORIGINAL block appears in each RECEIVED position. Example key 201 means original block 2 was received first.\nAfter permutation, a received block was reversed if its corresponding bit in the FIRST SIX bits of the recovered archive shard was 1. A 0 leaves it unchanged.\nTo restore: undo the per-position reversal, then put each block back at its original index.\nUse journal to recover the archive shard or revisit /archive. Both prior evidence and verified answers remain accessible.",
      "blocks.txt": "Received positions 0  1  2  3  4  5\nReceived blocks    TH OF EA HS LL WO"
    },
    "puzzles": [
      {
        "title": "Solve the six-position key",
        "brief": "Find the unique permutation satisfying every constraint.",
        "answer": "304512",
        "hints": [
          "Use p3=p1+1 and p6=5-p1 first. Repeated digits invalidate a candidate immediately.",
          "The first five rules leave 031245 and 304512. Only one has remainder 5 when divided by 7.",
          "solve 304512"
        ],
        "reward": "Permutation 304512 accepted. The lock yields its block map."
      },
      {
        "title": "Undo the layered transport",
        "brief": "Undo shard-controlled reversals, then undo the permutation.",
        "answer": "followtheash",
        "hints": [
          "The shard is 01010110. Only its first six bits are used here. Reverse received slots 1, 3 and 5.",
          "After reversals: TH FO EA SH LL OW. The key assigns these to original slots 3,0,4,5,1,2.",
          "solve followtheash"
        ],
        "reward": "Message restored: FOLLOW THE ASH. The testimony partition opens."
      }
    ]
  },
  {
    "dir": "tribunal",
    "name": "False witnesses",
    "difficulty": "Brutal",
    "subtitle": "Even the testimony about the testimony may be false.",
    "message": "M. / Five witnesses. Exactly three tell the truth. The saboteur cannot.",
    "files": {
      "readme.txt": "LEVEL 09 / 10 — BRUTAL\n\nGate 1: solve testimony.txt under rules.txt. Submit <saboteur>-<truthful witnesses in alphabetical order>, for example a-bcd.\nGate 2: identify the failed gate and stuck value from circuit.txt and traces.csv. Submit <gate>-low or <gate>-high. No actual electrical knowledge is needed; the boolean rules are below.",
      "rules.txt": "Exactly one of A,B,C,D,E is the saboteur.\nExactly THREE witnesses make true statements. The other two statements are false.\nThe saboteur’s statement is false.\nA statement referring to another witness being truthful refers to that witness’s entire statement.\n“Both true or both false” means the two propositions have the same truth value.\nUse a complete, self-consistent assignment; do not assume a witness is honest because of their wording.",
      "testimony.txt": "A: “B is the saboteur” and “D is truthful” are either both true or both false.\nB: The saboteur is D or E.\nC: Exactly one of A and B is truthful.\nD: C is the saboteur AND E is not truthful.\nE: A is not the saboteur.",
      "circuit.txt": "Binary inputs a,b,c,d are either 0 or 1.\nAND: 1 only if both inputs are 1. OR: 1 if at least one is 1. XOR: 1 if inputs differ. NOT: flips 0 and 1.\n\ng1 = a XOR b\ng2 = c AND d\ng3 = g1 OR g2\ng4 = NOT b\ng5 = g3 XOR g4\n\nEXACTLY ONE gate g1..g5 is stuck: it always outputs 0 (low) or always outputs 1 (high), ignoring its normal rule. All downstream gates use this faulty value.\nThe same fault applies to every trace. Input bits are reliable. The two observed columns are actual outputs of g3 and g5.\nFind the only fault consistent with EVERY trace.",
      "traces.csv": "a,b,c,d,tap_g3,out_g5\n0,0,0,0,0,0\n0,1,0,0,1,1\n1,0,0,0,1,1\n1,1,0,0,0,0\n0,0,1,1,1,1\n1,1,1,1,1,1\n0,1,1,0,1,1\n1,0,0,1,1,1"
    },
    "puzzles": [
      {
        "title": "Find the self-consistent testimony",
        "brief": "Identify the saboteur and all three truthful witnesses.",
        "answer": "d-abe",
        "hints": [
          "Try a candidate saboteur, then evaluate the statement dependencies. E is false only if A is the saboteur.",
          "With D as saboteur: B and E are true. D is false, so A is true and C is false. Check that alternatives cannot satisfy all rules.",
          "solve d-abe"
        ],
        "reward": "Witnesses A, B, E verified. Saboteur D isolated."
      },
      {
        "title": "Diagnose the sabotaged circuit",
        "brief": "One gate is stuck high or low across every recorded input.",
        "answer": "g4-low",
        "hints": [
          "Compare both output columns. They are equal on every trace, so the input XORed with g3 behaves like zero.",
          "When b=0, g4 should be 1. A stuck-low g4 instead makes g5 equal g3 for every input. Test other faults against all traces.",
          "solve g4-low"
        ],
        "reward": "Gate g4 repaired. The final vault is reachable."
      }
    ]
  },
  {
    "dir": "core",
    "name": "The impossible seal",
    "subtitle": "Reconstruct the proof, then reverse the entire seal pipeline.",
    "message": "M. / This lock was built from everything they took from us. You already have every missing piece.",
    "files": {
      "readme.txt": "LEVEL 10 / 10 — INSANE\n\nFINAL LEVEL / INSANE\nGate 1: find the authentic backup using provenance.txt, backups.csv, parents.csv, and evidence from /recovery, /archive, /watcher and /clock. Submit <backup ID>-<computed checksum>, for example z9-123.\nGate 2: reverse the multi-stage cipher in seal.txt. Submit <decoded six-letter word>-<checksum from gate 1>.\nUse journal to review earlier answers. All previous directories remain mounted.\nAfter both gates, choose release or choose preserve.",
      "provenance.txt": "A backup is authentic only if ALL rules hold:\n1. Its signer matches the genuine operator recovered in /recovery.\n2. After applying the /clock offsets, its real creation time is strictly BEFORE 12:00:45 on the same day.\n3. Its parent exists in parents.csv, is TRUSTED, and has generation exactly one below the backup.\n4. Its checksum equals (17 * backup generation + missing archive shard as an unsigned binary integer + watcher PID) mod 256.\n“mod 256” means keep the remainder after dividing by 256.\nThe missing archive shard and watcher PID are earlier verified answers. A correct checksum alone does not prove authenticity.",
      "parents.csv": "id,generation,status\nr7,7,TRUSTED\nr8,8,TRUSTED\nr9,9,REVOKED",
      "backups.csv": "id,signer,clock,time,generation,parent,checksum\na1,IRIS,ALPHA,12:02:39,8,r7,148\nb2,IRIS,ALPHA,12:02:42,9,r8,149\nc3,IRIS,BETA,11:59:46,9,r8,149\nd4,VALE,GAMMA,12:00:20,8,r7,132\ne5,IRIS,GAMMA,12:00:40,11,r8,183\nf6,IRIS,GAMMA,12:00:30,10,r9,166",
      "seal.txt": "The seal encoded SIX uppercase ASCII letters in this exact order:\n\n1. INITIAL SEED = authentic backup checksum XOR missing archive shard (both as 8-bit integers). XOR is bitwise as in /archive/parity.txt.\n2. For original character position i=0..5, add that position’s seed to its ASCII value, modulo 256.\n   Seed for position 0 is INITIAL SEED. For each subsequent position: next_seed = (5 * previous_seed + 1) mod 256.\n3. Rotate each resulting 8-bit byte LEFT by R bits, where R is the saboteur’s alphabet position from /tribunal (A=1, B=2, ...). Rotation wraps the bits; it is NOT a shift with zero padding.\n4. Permute the six bytes using the /lattice key: the key lists the ORIGINAL index at each RECEIVED position.\n5. Reverse the EIGHT BITS of each received byte whose corresponding bit in the FIRST SIX bits of the archive shard is 1.\n\nThe final received bytes are in payload.bin. Reverse steps 5,4,3,2, in that order. Seed progression is indexed by ORIGINAL position.\nFor reverse addition, use (value - seed + 256) mod 256.\nA left rotation by 4 of abcdefgh is efghabcd; reversing all eight bits instead gives hgfedcba. These are different operations.\nRead ascii.txt for the character table.\nSubmit the decoded word followed by a hyphen and the authentic backup checksum.\n\nAfter acceptance:\nchoose release — both copies leave; NULL loses containment.\nchoose preserve — you leave; M. stays sheltered in the archive.\nBoth endings complete the campaign.",
      "ascii.txt": "ASCII uppercase characters (decimal):\nA=65 B=66 C=67 D=68 E=69 F=70 G=71 H=72 I=73 J=74 K=75 L=76 M=77 N=78 O=79 P=80 Q=81 R=82 S=83 T=84 U=85 V=86 W=87 X=88 Y=89 Z=90",
      "payload.bin": "Received positions: 0 through 5, left to right.\n10111001 00000010 11011111 11010000 00110010 10100010"
    },
    "puzzles": [
      {
        "title": "Authenticate the cross-partition proof",
        "brief": "Normalize clocks, verify ancestry, and recompute checksums.",
        "answer": "b2-149",
        "hints": [
          "Use journal for the operator, shard, and PID. The shard 01010110 is decimal 86. Check each rule separately.",
          "B2 has generation 9 and trusted parent r8. Its real time is 12:00:42. (17*9 + 86 + 422) mod 256 = 149.",
          "solve b2-149"
        ],
        "reward": "Backup B2 and checksum 149 authenticated. The seal pipeline is now your final obstacle."
      },
      {
        "title": "Reverse the impossible seal",
        "brief": "Undo bit reversal, permutation, rotation, then rolling-seed addition.",
        "answer": "ascend-149",
        "hints": [
          "Undo the last transformation first. Use shard bits 010101 to reverse received slots 1,3,5. Key 304512 maps them back to original indices.",
          "The initial seed is 149 XOR 86 = 195. The six seeds are 195,208,17,86,175,108. After reordering, rotate each byte right by 4, then subtract its seed modulo 256.",
          "solve ascend-149"
        ],
        "reward": "FINAL SEAL ACCEPTED. Twenty gates verified. Use choose release or choose preserve."
      }
    ],
    "difficulty": "Insane"
  }
];
