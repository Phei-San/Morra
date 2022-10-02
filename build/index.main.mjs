// Automatically generated with Reach 0.1.12 (4ca32459)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (4ca32459)';
export const _backendVersion = 24;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1],
      11: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1],
      13: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1],
      15: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Faufau(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Faufau expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Faufau expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v454 = stdlib.protect(ctc0, interact.deadline, 'for Faufau\'s interact field deadline');
  const v455 = stdlib.protect(ctc0, interact.wager, 'for Faufau\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v455, v454],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:93:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v455, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v459, v460], secs: v462, time: v461, didSend: v71, from: v458 } = txn1;
      
      sim_r.txns.push({
        amt: v459,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v471 = stdlib.safeAdd(v461, v460);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v459, v460], secs: v462, time: v461, didSend: v71, from: v458 } = txn1;
  ;
  const v471 = stdlib.safeAdd(v461, v460);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v471],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v458, v459, v460, v471],
      evt_cnt: 0,
      funcNum: 2,
      lct: v461,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v728, time: v727, didSend: v399, from: v726 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v458,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v728, time: v727, didSend: v399, from: v726 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:84:35:application',
      fs: ['at ./index.rsh:83:13:application call to [unknown function] (defined at: ./index.rsh:83:35:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:82:30:function exp)', 'at ./index.rsh:101:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Faufau'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v477, time: v476, didSend: v80, from: v475 } = txn2;
    const v479 = stdlib.add(v459, v459);
    ;
    let v480 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v481 = v476;
    let v488 = v479;
    
    let txn3 = txn2;
    while (await (async () => {
      const v496 = stdlib.eq(v480, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v496;})()) {
      const v503 = stdlib.safeAdd(v481, v460);
      const v507 = stdlib.protect(ctc0, await interact.getFinger(), {
        at: './index.rsh:113:53:application',
        fs: ['at ./index.rsh:109:20:application call to [unknown function] (defined at: ./index.rsh:109:24:function exp)'],
        msg: 'getFinger',
        who: 'Faufau'
        });
      const v508 = stdlib.protect(ctc0, await interact.getGuess(), {
        at: './index.rsh:114:51:application',
        fs: ['at ./index.rsh:109:20:application call to [unknown function] (defined at: ./index.rsh:109:24:function exp)'],
        msg: 'getGuess',
        who: 'Faufau'
        });
      const v509 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:118:64:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:109:20:application call to [unknown function] (defined at: ./index.rsh:109:24:function exp)'],
        msg: 'random',
        who: 'Faufau'
        });
      const v510 = stdlib.digest([ctc0, ctc0], [v509, v507]);
      const v512 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:120:74:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:109:20:application call to [unknown function] (defined at: ./index.rsh:109:24:function exp)'],
        msg: 'random',
        who: 'Faufau'
        });
      const v513 = stdlib.digest([ctc0, ctc0], [v512, v508]);
      
      const txn4 = await (ctc.sendrecv({
        args: [v458, v459, v460, v475, v488, v503, v510],
        evt_cnt: 1,
        funcNum: 4,
        lct: v481,
        onlyIf: true,
        out_tys: [ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:128:16:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v516], secs: v518, time: v517, didSend: v111, from: v515 } = txn4;
          
          ;
          const v526 = stdlib.safeAdd(v517, v460);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v503],
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc1],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v458, v459, v460, v475, v488, v503],
          evt_cnt: 0,
          funcNum: 5,
          lct: v481,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v694, time: v693, didSend: v352, from: v692 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v475,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v694, time: v693, didSend: v352, from: v692 } = txn5;
        ;
        const v695 = stdlib.addressEq(v458, v692);
        const v696 = stdlib.addressEq(v475, v692);
        const v697 = v695 ? true : v696;
        stdlib.assert(v697, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:129:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Faufau'
          });
        ;
        stdlib.protect(ctc2, await interact.informTimeout(), {
          at: './index.rsh:84:35:application',
          fs: ['at ./index.rsh:83:13:application call to [unknown function] (defined at: ./index.rsh:83:35:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:82:30:function exp)', 'at ./index.rsh:129:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Faufau'
          });
        
        return;
        
        }
      else {
        const {data: [v516], secs: v518, time: v517, didSend: v111, from: v515 } = txn4;
        ;
        const v519 = stdlib.addressEq(v458, v515);
        stdlib.assert(v519, {
          at: './index.rsh:128:16:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Faufau'
          });
        const v526 = stdlib.safeAdd(v517, v460);
        const txn5 = await (ctc.sendrecv({
          args: [v458, v459, v460, v475, v488, v516, v526, v513],
          evt_cnt: 1,
          funcNum: 6,
          lct: v517,
          onlyIf: true,
          out_tys: [ctc1],
          pay: [stdlib.checkedBigNumberify('./index.rsh:131:16:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v529], secs: v531, time: v530, didSend: v117, from: v528 } = txn5;
            
            ;
            const v539 = stdlib.safeAdd(v530, v460);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v526],
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc0, ctc1],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v458, v459, v460, v475, v488, v516, v526],
            evt_cnt: 0,
            funcNum: 7,
            lct: v517,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v676, time: v675, didSend: v318, from: v674 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v475,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v676, time: v675, didSend: v318, from: v674 } = txn6;
          ;
          const v677 = stdlib.addressEq(v458, v674);
          const v678 = stdlib.addressEq(v475, v674);
          const v679 = v677 ? true : v678;
          stdlib.assert(v679, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:132:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Faufau'
            });
          ;
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:84:35:application',
            fs: ['at ./index.rsh:83:13:application call to [unknown function] (defined at: ./index.rsh:83:35:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:82:30:function exp)', 'at ./index.rsh:132:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Faufau'
            });
          
          return;
          
          }
        else {
          const {data: [v529], secs: v531, time: v530, didSend: v117, from: v528 } = txn5;
          ;
          const v532 = stdlib.addressEq(v458, v528);
          stdlib.assert(v532, {
            at: './index.rsh:131:16:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Faufau'
            });
          const v539 = stdlib.safeAdd(v530, v460);
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 8,
            out_tys: [ctc0],
            timeoutAt: ['time', v539],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v458, v459, v460, v475, v488, v516, v529, v539],
              evt_cnt: 0,
              funcNum: 9,
              lct: v530,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v658, time: v657, didSend: v284, from: v656 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v458,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v658, time: v657, didSend: v284, from: v656 } = txn7;
            ;
            const v659 = stdlib.addressEq(v458, v656);
            const v660 = stdlib.addressEq(v475, v656);
            const v661 = v659 ? true : v660;
            stdlib.assert(v661, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:153:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Faufau'
              });
            ;
            stdlib.protect(ctc2, await interact.informTimeout(), {
              at: './index.rsh:84:35:application',
              fs: ['at ./index.rsh:83:13:application call to [unknown function] (defined at: ./index.rsh:83:35:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:82:30:function exp)', 'at ./index.rsh:153:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Faufau'
              });
            
            return;
            
            }
          else {
            const {data: [v546], secs: v548, time: v547, didSend: v128, from: v545 } = txn6;
            ;
            const v549 = stdlib.addressEq(v475, v545);
            stdlib.assert(v549, {
              at: './index.rsh:148:16:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Faufau'
              });
            const v556 = stdlib.safeAdd(v547, v460);
            const txn7 = await (ctc.recv({
              didSend: false,
              evt_cnt: 1,
              funcNum: 10,
              out_tys: [ctc0],
              timeoutAt: ['time', v556],
              waitIfNotPresent: false
              }));
            if (txn7.didTimeout) {
              const txn8 = await (ctc.sendrecv({
                args: [v458, v459, v460, v475, v488, v516, v529, v546, v556],
                evt_cnt: 0,
                funcNum: 11,
                lct: v547,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn8) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [], secs: v640, time: v639, didSend: v250, from: v638 } = txn8;
                  
                  ;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v458,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  
                  return sim_r;
                  }),
                soloSend: false,
                timeoutAt: undefined /* mto */,
                tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v640, time: v639, didSend: v250, from: v638 } = txn8;
              ;
              const v641 = stdlib.addressEq(v458, v638);
              const v642 = stdlib.addressEq(v475, v638);
              const v643 = v641 ? true : v642;
              stdlib.assert(v643, {
                at: 'reach standard library:197:11:dot',
                fs: ['at ./index.rsh:156:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'sender correct',
                who: 'Faufau'
                });
              ;
              stdlib.protect(ctc2, await interact.informTimeout(), {
                at: './index.rsh:84:35:application',
                fs: ['at ./index.rsh:83:13:application call to [unknown function] (defined at: ./index.rsh:83:35:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:82:30:function exp)', 'at ./index.rsh:156:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'informTimeout',
                who: 'Faufau'
                });
              
              return;
              
              }
            else {
              const {data: [v559], secs: v561, time: v560, didSend: v134, from: v558 } = txn7;
              ;
              const v562 = stdlib.addressEq(v475, v558);
              stdlib.assert(v562, {
                at: './index.rsh:155:16:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Faufau'
                });
              const v569 = stdlib.safeAdd(v560, v460);
              const txn8 = await (ctc.sendrecv({
                args: [v458, v459, v460, v475, v488, v516, v529, v546, v559, v569, v509, v507],
                evt_cnt: 2,
                funcNum: 12,
                lct: v560,
                onlyIf: true,
                out_tys: [ctc0, ctc0],
                pay: [stdlib.checkedBigNumberify('./index.rsh:167:16:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn8) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [v574, v575], secs: v577, time: v576, didSend: v144, from: v573 } = txn8;
                  
                  ;
                  const v587 = stdlib.safeAdd(v576, v460);
                  sim_r.isHalt = false;
                  
                  return sim_r;
                  }),
                soloSend: true,
                timeoutAt: ['time', v569],
                tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              if (txn8.didTimeout) {
                const txn9 = await (ctc.sendrecv({
                  args: [v458, v459, v460, v475, v488, v516, v529, v546, v559, v569],
                  evt_cnt: 0,
                  funcNum: 13,
                  lct: v560,
                  onlyIf: true,
                  out_tys: [],
                  pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                  sim_p: (async (txn9) => {
                    const sim_r = { txns: [], mapRefs: [], maps: [] };
                    let sim_txn_ctr = stdlib.UInt_max;
                    const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                    
                    
                    const {data: [], secs: v622, time: v621, didSend: v216, from: v620 } = txn9;
                    
                    ;
                    sim_r.txns.push({
                      kind: 'from',
                      to: v475,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    
                    return sim_r;
                    }),
                  soloSend: false,
                  timeoutAt: undefined /* mto */,
                  tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0],
                  waitIfNotPresent: false
                  }));
                const {data: [], secs: v622, time: v621, didSend: v216, from: v620 } = txn9;
                ;
                const v623 = stdlib.addressEq(v458, v620);
                const v624 = stdlib.addressEq(v475, v620);
                const v625 = v623 ? true : v624;
                stdlib.assert(v625, {
                  at: 'reach standard library:197:11:dot',
                  fs: ['at ./index.rsh:169:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Faufau'
                  });
                ;
                stdlib.protect(ctc2, await interact.informTimeout(), {
                  at: './index.rsh:84:35:application',
                  fs: ['at ./index.rsh:83:13:application call to [unknown function] (defined at: ./index.rsh:83:35:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:82:30:function exp)', 'at ./index.rsh:169:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                  msg: 'informTimeout',
                  who: 'Faufau'
                  });
                
                return;
                
                }
              else {
                const {data: [v574, v575], secs: v577, time: v576, didSend: v144, from: v573 } = txn8;
                ;
                const v578 = stdlib.addressEq(v458, v573);
                stdlib.assert(v578, {
                  at: './index.rsh:167:16:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Faufau'
                  });
                const v579 = stdlib.digest([ctc0, ctc0], [v574, v575]);
                const v580 = stdlib.digestEq(v516, v579);
                stdlib.assert(v580, {
                  at: 'reach standard library:69:17:application',
                  fs: ['at ./index.rsh:170:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                  msg: null,
                  who: 'Faufau'
                  });
                const v587 = stdlib.safeAdd(v576, v460);
                const txn9 = await (ctc.sendrecv({
                  args: [v458, v459, v460, v475, v488, v529, v546, v559, v575, v587, v512, v508],
                  evt_cnt: 2,
                  funcNum: 14,
                  lct: v576,
                  onlyIf: true,
                  out_tys: [ctc0, ctc0],
                  pay: [stdlib.checkedBigNumberify('./index.rsh:173:16:decimal', stdlib.UInt_max, '0'), []],
                  sim_p: (async (txn9) => {
                    const sim_r = { txns: [], mapRefs: [], maps: [] };
                    let sim_txn_ctr = stdlib.UInt_max;
                    const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                    
                    
                    const {data: [v590, v591], secs: v593, time: v592, didSend: v154, from: v589 } = txn9;
                    
                    ;
                    let v597;
                    const v598 = stdlib.safeAdd(v575, v546);
                    const v599 = stdlib.eq(v591, v559);
                    if (v599) {
                      v597 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                      }
                    else {
                      const v600 = stdlib.eq(v598, v591);
                      if (v600) {
                        v597 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                        }
                      else {
                        const v601 = stdlib.eq(v598, v559);
                        if (v601) {
                          v597 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                          }
                        else {
                          v597 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                          }
                        }
                      }
                    const cv480 = v597;
                    const cv481 = v592;
                    const cv488 = v488;
                    
                    await (async () => {
                      const v480 = cv480;
                      const v481 = cv481;
                      const v488 = cv488;
                      
                      if (await (async () => {
                        const v496 = stdlib.eq(v480, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                        
                        return v496;})()) {
                        const v503 = stdlib.safeAdd(v481, v460);
                        sim_r.isHalt = false;
                        }
                      else {
                        const v710 = stdlib.eq(v480, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
                        const v713 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:199:14:decimal', stdlib.UInt_max, '2'), v459);
                        const v715 = v710 ? v458 : v475;
                        sim_r.txns.push({
                          kind: 'from',
                          to: v715,
                          tok: undefined /* Nothing */
                          });
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }})();
                    return sim_r;
                    }),
                  soloSend: true,
                  timeoutAt: ['time', v587],
                  tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                  waitIfNotPresent: false
                  }));
                if (txn9.didTimeout) {
                  const txn10 = await (ctc.sendrecv({
                    args: [v458, v459, v460, v475, v488, v529, v546, v559, v575, v587],
                    evt_cnt: 0,
                    funcNum: 15,
                    lct: v576,
                    onlyIf: true,
                    out_tys: [],
                    pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                    sim_p: (async (txn10) => {
                      const sim_r = { txns: [], mapRefs: [], maps: [] };
                      let sim_txn_ctr = stdlib.UInt_max;
                      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                      
                      
                      const {data: [], secs: v604, time: v603, didSend: v182, from: v602 } = txn10;
                      
                      ;
                      sim_r.txns.push({
                        kind: 'from',
                        to: v475,
                        tok: undefined /* Nothing */
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      
                      return sim_r;
                      }),
                    soloSend: false,
                    timeoutAt: undefined /* mto */,
                    tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc0, ctc0, ctc0, ctc0],
                    waitIfNotPresent: false
                    }));
                  const {data: [], secs: v604, time: v603, didSend: v182, from: v602 } = txn10;
                  ;
                  const v605 = stdlib.addressEq(v458, v602);
                  const v606 = stdlib.addressEq(v475, v602);
                  const v607 = v605 ? true : v606;
                  stdlib.assert(v607, {
                    at: 'reach standard library:197:11:dot',
                    fs: ['at ./index.rsh:174:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                    msg: 'sender correct',
                    who: 'Faufau'
                    });
                  ;
                  stdlib.protect(ctc2, await interact.informTimeout(), {
                    at: './index.rsh:84:35:application',
                    fs: ['at ./index.rsh:83:13:application call to [unknown function] (defined at: ./index.rsh:83:35:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:82:30:function exp)', 'at ./index.rsh:174:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                    msg: 'informTimeout',
                    who: 'Faufau'
                    });
                  
                  return;
                  
                  }
                else {
                  const {data: [v590, v591], secs: v593, time: v592, didSend: v154, from: v589 } = txn9;
                  ;
                  const v594 = stdlib.addressEq(v458, v589);
                  stdlib.assert(v594, {
                    at: './index.rsh:173:16:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Faufau'
                    });
                  const v595 = stdlib.digest([ctc0, ctc0], [v590, v591]);
                  const v596 = stdlib.digestEq(v529, v595);
                  stdlib.assert(v596, {
                    at: 'reach standard library:69:17:application',
                    fs: ['at ./index.rsh:175:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                    msg: null,
                    who: 'Faufau'
                    });
                  let v597;
                  const v598 = stdlib.safeAdd(v575, v546);
                  const v599 = stdlib.eq(v591, v559);
                  if (v599) {
                    v597 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                    }
                  else {
                    const v600 = stdlib.eq(v598, v591);
                    if (v600) {
                      v597 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                      }
                    else {
                      const v601 = stdlib.eq(v598, v559);
                      if (v601) {
                        v597 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                        }
                      else {
                        v597 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                        }
                      }
                    }
                  const cv480 = v597;
                  const cv481 = v592;
                  const cv488 = v488;
                  
                  v480 = cv480;
                  v481 = cv481;
                  v488 = cv488;
                  
                  txn3 = txn9;
                  continue;}
                
                }
              
              }
            
            }
          
          }
        
        }
      
      }
    const v710 = stdlib.eq(v480, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    const v713 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:199:14:decimal', stdlib.UInt_max, '2'), v459);
    const v715 = v710 ? v458 : v475;
    ;
    stdlib.protect(ctc2, await interact.seeOutcome(v480), {
      at: './index.rsh:203:28:application',
      fs: ['at ./index.rsh:202:9:application call to [unknown function] (defined at: ./index.rsh:202:31:function exp)'],
      msg: 'seeOutcome',
      who: 'Faufau'
      });
    
    return;
    }
  
  
  
  };
export async function Paupau(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Paupau expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Paupau expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v459, v460], secs: v462, time: v461, didSend: v71, from: v458 } = txn1;
  ;
  const v471 = stdlib.safeAdd(v461, v460);
  stdlib.protect(ctc1, await interact.acceptWager(v459), {
    at: './index.rsh:98:29:application',
    fs: ['at ./index.rsh:97:16:application call to [unknown function] (defined at: ./index.rsh:97:20:function exp)'],
    msg: 'acceptWager',
    who: 'Paupau'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v458, v459, v460, v471],
    evt_cnt: 0,
    funcNum: 1,
    lct: v461,
    onlyIf: true,
    out_tys: [],
    pay: [v459, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v477, time: v476, didSend: v80, from: v475 } = txn2;
      
      const v479 = stdlib.add(v459, v459);
      sim_r.txns.push({
        amt: v459,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v480 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v481 = v476;
      const v488 = v479;
      
      if (await (async () => {
        const v496 = stdlib.eq(v480, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v496;})()) {
        const v503 = stdlib.safeAdd(v481, v460);
        sim_r.isHalt = false;
        }
      else {
        const v710 = stdlib.eq(v480, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        const v713 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:199:14:decimal', stdlib.UInt_max, '2'), v459);
        const v715 = v710 ? v458 : v475;
        sim_r.txns.push({
          kind: 'from',
          to: v715,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v471],
    tys: [ctc3, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v458, v459, v460, v471],
      evt_cnt: 0,
      funcNum: 2,
      lct: v461,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v728, time: v727, didSend: v399, from: v726 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v458,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v728, time: v727, didSend: v399, from: v726 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:84:35:application',
      fs: ['at ./index.rsh:83:13:application call to [unknown function] (defined at: ./index.rsh:83:35:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:82:30:function exp)', 'at ./index.rsh:101:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Paupau'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v477, time: v476, didSend: v80, from: v475 } = txn2;
    const v479 = stdlib.add(v459, v459);
    ;
    let v480 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v481 = v476;
    let v488 = v479;
    
    let txn3 = txn2;
    while (await (async () => {
      const v496 = stdlib.eq(v480, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v496;})()) {
      const v503 = stdlib.safeAdd(v481, v460);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc2],
        timeoutAt: ['time', v503],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v458, v459, v460, v475, v488, v503],
          evt_cnt: 0,
          funcNum: 5,
          lct: v481,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v694, time: v693, didSend: v352, from: v692 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v475,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v694, time: v693, didSend: v352, from: v692 } = txn5;
        ;
        const v695 = stdlib.addressEq(v458, v692);
        const v696 = stdlib.addressEq(v475, v692);
        const v697 = v695 ? true : v696;
        stdlib.assert(v697, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:129:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Paupau'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:84:35:application',
          fs: ['at ./index.rsh:83:13:application call to [unknown function] (defined at: ./index.rsh:83:35:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:82:30:function exp)', 'at ./index.rsh:129:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Paupau'
          });
        
        return;
        
        }
      else {
        const {data: [v516], secs: v518, time: v517, didSend: v111, from: v515 } = txn4;
        ;
        const v519 = stdlib.addressEq(v458, v515);
        stdlib.assert(v519, {
          at: './index.rsh:128:16:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Paupau'
          });
        const v526 = stdlib.safeAdd(v517, v460);
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc2],
          timeoutAt: ['time', v526],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v458, v459, v460, v475, v488, v516, v526],
            evt_cnt: 0,
            funcNum: 7,
            lct: v517,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v676, time: v675, didSend: v318, from: v674 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v475,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v676, time: v675, didSend: v318, from: v674 } = txn6;
          ;
          const v677 = stdlib.addressEq(v458, v674);
          const v678 = stdlib.addressEq(v475, v674);
          const v679 = v677 ? true : v678;
          stdlib.assert(v679, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:132:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Paupau'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:84:35:application',
            fs: ['at ./index.rsh:83:13:application call to [unknown function] (defined at: ./index.rsh:83:35:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:82:30:function exp)', 'at ./index.rsh:132:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Paupau'
            });
          
          return;
          
          }
        else {
          const {data: [v529], secs: v531, time: v530, didSend: v117, from: v528 } = txn5;
          ;
          const v532 = stdlib.addressEq(v458, v528);
          stdlib.assert(v532, {
            at: './index.rsh:131:16:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Paupau'
            });
          const v539 = stdlib.safeAdd(v530, v460);
          const v543 = stdlib.protect(ctc0, await interact.getFinger(), {
            at: './index.rsh:141:53:application',
            fs: ['at ./index.rsh:140:20:application call to [unknown function] (defined at: ./index.rsh:140:24:function exp)'],
            msg: 'getFinger',
            who: 'Paupau'
            });
          const v544 = stdlib.protect(ctc0, await interact.getGuess(), {
            at: './index.rsh:142:51:application',
            fs: ['at ./index.rsh:140:20:application call to [unknown function] (defined at: ./index.rsh:140:24:function exp)'],
            msg: 'getGuess',
            who: 'Paupau'
            });
          
          const txn6 = await (ctc.sendrecv({
            args: [v458, v459, v460, v475, v488, v516, v529, v539, v543],
            evt_cnt: 1,
            funcNum: 8,
            lct: v530,
            onlyIf: true,
            out_tys: [ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:148:16:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v546], secs: v548, time: v547, didSend: v128, from: v545 } = txn6;
              
              ;
              const v556 = stdlib.safeAdd(v547, v460);
              sim_r.isHalt = false;
              
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v539],
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v458, v459, v460, v475, v488, v516, v529, v539],
              evt_cnt: 0,
              funcNum: 9,
              lct: v530,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v658, time: v657, didSend: v284, from: v656 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v458,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v658, time: v657, didSend: v284, from: v656 } = txn7;
            ;
            const v659 = stdlib.addressEq(v458, v656);
            const v660 = stdlib.addressEq(v475, v656);
            const v661 = v659 ? true : v660;
            stdlib.assert(v661, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:153:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Paupau'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:84:35:application',
              fs: ['at ./index.rsh:83:13:application call to [unknown function] (defined at: ./index.rsh:83:35:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:82:30:function exp)', 'at ./index.rsh:153:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Paupau'
              });
            
            return;
            
            }
          else {
            const {data: [v546], secs: v548, time: v547, didSend: v128, from: v545 } = txn6;
            ;
            const v549 = stdlib.addressEq(v475, v545);
            stdlib.assert(v549, {
              at: './index.rsh:148:16:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Paupau'
              });
            const v556 = stdlib.safeAdd(v547, v460);
            const txn7 = await (ctc.sendrecv({
              args: [v458, v459, v460, v475, v488, v516, v529, v546, v556, v544],
              evt_cnt: 1,
              funcNum: 10,
              lct: v547,
              onlyIf: true,
              out_tys: [ctc0],
              pay: [stdlib.checkedBigNumberify('./index.rsh:155:16:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [v559], secs: v561, time: v560, didSend: v134, from: v558 } = txn7;
                
                ;
                const v569 = stdlib.safeAdd(v560, v460);
                sim_r.isHalt = false;
                
                return sim_r;
                }),
              soloSend: true,
              timeoutAt: ['time', v556],
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            if (txn7.didTimeout) {
              const txn8 = await (ctc.sendrecv({
                args: [v458, v459, v460, v475, v488, v516, v529, v546, v556],
                evt_cnt: 0,
                funcNum: 11,
                lct: v547,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn8) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [], secs: v640, time: v639, didSend: v250, from: v638 } = txn8;
                  
                  ;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v458,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  
                  return sim_r;
                  }),
                soloSend: false,
                timeoutAt: undefined /* mto */,
                tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v640, time: v639, didSend: v250, from: v638 } = txn8;
              ;
              const v641 = stdlib.addressEq(v458, v638);
              const v642 = stdlib.addressEq(v475, v638);
              const v643 = v641 ? true : v642;
              stdlib.assert(v643, {
                at: 'reach standard library:197:11:dot',
                fs: ['at ./index.rsh:156:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'sender correct',
                who: 'Paupau'
                });
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './index.rsh:84:35:application',
                fs: ['at ./index.rsh:83:13:application call to [unknown function] (defined at: ./index.rsh:83:35:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:82:30:function exp)', 'at ./index.rsh:156:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'informTimeout',
                who: 'Paupau'
                });
              
              return;
              
              }
            else {
              const {data: [v559], secs: v561, time: v560, didSend: v134, from: v558 } = txn7;
              ;
              const v562 = stdlib.addressEq(v475, v558);
              stdlib.assert(v562, {
                at: './index.rsh:155:16:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Paupau'
                });
              const v569 = stdlib.safeAdd(v560, v460);
              const txn8 = await (ctc.recv({
                didSend: false,
                evt_cnt: 2,
                funcNum: 12,
                out_tys: [ctc0, ctc0],
                timeoutAt: ['time', v569],
                waitIfNotPresent: false
                }));
              if (txn8.didTimeout) {
                const txn9 = await (ctc.sendrecv({
                  args: [v458, v459, v460, v475, v488, v516, v529, v546, v559, v569],
                  evt_cnt: 0,
                  funcNum: 13,
                  lct: v560,
                  onlyIf: true,
                  out_tys: [],
                  pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                  sim_p: (async (txn9) => {
                    const sim_r = { txns: [], mapRefs: [], maps: [] };
                    let sim_txn_ctr = stdlib.UInt_max;
                    const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                    
                    
                    const {data: [], secs: v622, time: v621, didSend: v216, from: v620 } = txn9;
                    
                    ;
                    sim_r.txns.push({
                      kind: 'from',
                      to: v475,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    
                    return sim_r;
                    }),
                  soloSend: false,
                  timeoutAt: undefined /* mto */,
                  tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
                  waitIfNotPresent: false
                  }));
                const {data: [], secs: v622, time: v621, didSend: v216, from: v620 } = txn9;
                ;
                const v623 = stdlib.addressEq(v458, v620);
                const v624 = stdlib.addressEq(v475, v620);
                const v625 = v623 ? true : v624;
                stdlib.assert(v625, {
                  at: 'reach standard library:197:11:dot',
                  fs: ['at ./index.rsh:169:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Paupau'
                  });
                ;
                stdlib.protect(ctc1, await interact.informTimeout(), {
                  at: './index.rsh:84:35:application',
                  fs: ['at ./index.rsh:83:13:application call to [unknown function] (defined at: ./index.rsh:83:35:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:82:30:function exp)', 'at ./index.rsh:169:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                  msg: 'informTimeout',
                  who: 'Paupau'
                  });
                
                return;
                
                }
              else {
                const {data: [v574, v575], secs: v577, time: v576, didSend: v144, from: v573 } = txn8;
                ;
                const v578 = stdlib.addressEq(v458, v573);
                stdlib.assert(v578, {
                  at: './index.rsh:167:16:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Paupau'
                  });
                const v579 = stdlib.digest([ctc0, ctc0], [v574, v575]);
                const v580 = stdlib.digestEq(v516, v579);
                stdlib.assert(v580, {
                  at: 'reach standard library:69:17:application',
                  fs: ['at ./index.rsh:170:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                  msg: null,
                  who: 'Paupau'
                  });
                const v587 = stdlib.safeAdd(v576, v460);
                const txn9 = await (ctc.recv({
                  didSend: false,
                  evt_cnt: 2,
                  funcNum: 14,
                  out_tys: [ctc0, ctc0],
                  timeoutAt: ['time', v587],
                  waitIfNotPresent: false
                  }));
                if (txn9.didTimeout) {
                  const txn10 = await (ctc.sendrecv({
                    args: [v458, v459, v460, v475, v488, v529, v546, v559, v575, v587],
                    evt_cnt: 0,
                    funcNum: 15,
                    lct: v576,
                    onlyIf: true,
                    out_tys: [],
                    pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                    sim_p: (async (txn10) => {
                      const sim_r = { txns: [], mapRefs: [], maps: [] };
                      let sim_txn_ctr = stdlib.UInt_max;
                      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                      
                      
                      const {data: [], secs: v604, time: v603, didSend: v182, from: v602 } = txn10;
                      
                      ;
                      sim_r.txns.push({
                        kind: 'from',
                        to: v475,
                        tok: undefined /* Nothing */
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      
                      return sim_r;
                      }),
                    soloSend: false,
                    timeoutAt: undefined /* mto */,
                    tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
                    waitIfNotPresent: false
                    }));
                  const {data: [], secs: v604, time: v603, didSend: v182, from: v602 } = txn10;
                  ;
                  const v605 = stdlib.addressEq(v458, v602);
                  const v606 = stdlib.addressEq(v475, v602);
                  const v607 = v605 ? true : v606;
                  stdlib.assert(v607, {
                    at: 'reach standard library:197:11:dot',
                    fs: ['at ./index.rsh:174:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                    msg: 'sender correct',
                    who: 'Paupau'
                    });
                  ;
                  stdlib.protect(ctc1, await interact.informTimeout(), {
                    at: './index.rsh:84:35:application',
                    fs: ['at ./index.rsh:83:13:application call to [unknown function] (defined at: ./index.rsh:83:35:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:82:30:function exp)', 'at ./index.rsh:174:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                    msg: 'informTimeout',
                    who: 'Paupau'
                    });
                  
                  return;
                  
                  }
                else {
                  const {data: [v590, v591], secs: v593, time: v592, didSend: v154, from: v589 } = txn9;
                  ;
                  const v594 = stdlib.addressEq(v458, v589);
                  stdlib.assert(v594, {
                    at: './index.rsh:173:16:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Paupau'
                    });
                  const v595 = stdlib.digest([ctc0, ctc0], [v590, v591]);
                  const v596 = stdlib.digestEq(v529, v595);
                  stdlib.assert(v596, {
                    at: 'reach standard library:69:17:application',
                    fs: ['at ./index.rsh:175:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                    msg: null,
                    who: 'Paupau'
                    });
                  let v597;
                  const v598 = stdlib.safeAdd(v575, v546);
                  const v599 = stdlib.eq(v591, v559);
                  if (v599) {
                    v597 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                    }
                  else {
                    const v600 = stdlib.eq(v598, v591);
                    if (v600) {
                      v597 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                      }
                    else {
                      const v601 = stdlib.eq(v598, v559);
                      if (v601) {
                        v597 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                        }
                      else {
                        v597 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                        }
                      }
                    }
                  const cv480 = v597;
                  const cv481 = v592;
                  const cv488 = v488;
                  
                  v480 = cv480;
                  v481 = cv481;
                  v488 = cv488;
                  
                  txn3 = txn9;
                  continue;}
                
                }
              
              }
            
            }
          
          }
        
        }
      
      }
    const v710 = stdlib.eq(v480, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    const v713 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:199:14:decimal', stdlib.UInt_max, '2'), v459);
    const v715 = v710 ? v458 : v475;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v480), {
      at: './index.rsh:203:28:application',
      fs: ['at ./index.rsh:202:9:application call to [unknown function] (defined at: ./index.rsh:202:31:function exp)'],
      msg: 'seeOutcome',
      who: 'Paupau'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAUAAFQICgIDwUCDZgBCwkHeKABkAGoAVgwJgMBAAEBACI1ADEYQQfvKmRJIls1ASEFWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0khBQxABEFJgQwMQAI4SYEODEABFEkhBgxAAFYhBhJEIQY0ARJENARJIhJMNAISEUQoZClkUEk1A1cwIDX/gARGR4xesDIGNAMhEFsPRDQDVwAgMQASNP8xABIRRLEisgE0AyRbsggjshA0/7IHs0IHBUghBjQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSVcAIDX/gYABWzX+STUFSSJbNf0hBVs1/IAEva7n1TT9FlA0/BZQsDIGNAMhEFsMRDT/MQASRDQDV1ggNP0WNPwWUAESRDQDgYgBWzQDIQ5bCDX6NPw0/hJBAAYjNftCACA0+jT8EkEABiI1+0IAEjT6NP4SQQAHIQg1+0IAAyM1+zT/NAMlWzQDIQRbNANXMCA0+zIGNAMkW0IF7UkhCQxAAFNIIQk0ARJENARJIhJMNAISEUQoZClkUEk1A1cwIDX/gAQin5cDsDIGNAMhEVsPRDQDVwAgMQASNP8xABIRRLEisgE0AyRbsggjshA0/7IHs0IF9EghCTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSlcAIDX/JVs1/iEEWzX9VzAgNfwkWzX7V3ggNfohCls1+SEPWzX4STUFSSJbNfchBVs19oAEw6qQwTT3FlA09hZQsDIGNAMhEVsMRDT/MQASRDQDV1ggNPcWNPYWUAESRDIGNP0INfU0/zT+FlA0/RZQNPxQNPsWUDT6UDT5FlA0+BZQNPYWUDT1FlAoSwFXAH9nKUsBV38ZZ0ghBjUBMgY1AkIFTUmBCgxAAQJJIQsMQABTSCELNAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/4AE49k2NbAyBjQDIQ9bD0Q0/zEAEjQDVzAgMQASEUSxIrIBNAMkW7III7IQNP+yB7NCBNBIIQs0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpXACA1/yVbNf4hBFs1/VcwIDX8JFs1+1dYIDX6V3ggNfkhCls1+Ek1BRc194AEp4vCCzT3FlCwMgY0AyEPWwxENPwxABJEMgY0/Qg19jT/NP4WUDT9FlA0/FA0+xZQNPpQNPlQNPgWUDT3FlA09hZQKEsBVwB/ZylLAVd/MWdIIQk1ATIGNQJCBERJIQwMQABTSCEMNAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/4AEogVmjrAyBjQDIQpbD0Q0/zEAEjQDVzAgMQASEUSxIrIBNAMkW7III7IQNP+yB7NCA85IIQw0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSklXACA1/yVbNf4hBFs1/VcwIDX8JFs1+1dYIDX6V3ggNflJNQUXNfiABC/a6R00+BZQsDIGNAMhClsMRDT8MQASRDIGNP0INfc0/zT+FlA0/RZQNPxQNPsWUDT6UDT5UDT4FlA09xZQKEsBVwB/ZylLAVd/KWdIIQs1ATIGNQJCA0tJgQQMQAHTSYEGDEAA7UkhDQxAAFNIIQ00ARJENARJIhJMNAISEUQoZClkUEk1A1cwIDX/gATiG7OpsDIGNAMhDlsPRDQDVwAgMQASNP8xABIRRLEisgE0AyRbsggjshA0/7IHs0ICx0ghDTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKVwAgNf8lWzX+IQRbNf1XMCA1/CRbNftXWCA1+kk1BTX5gARp7js+NPlQsDIGNAMhDlsMRDT/MQASRDIGNP0INfg0/zT+FlA0/RZQNPxQNPsWUDT6UDT5UDT4FlAoSwFXAH9nKUsBV38hZ0ghDDUBMgY1AkICUEkhBwxAAFBIIQc0ARJENARJIhJMNAISEUQoZEk1A1cwIDX/gATMmZJcsDIGNAMhElsPRDQDVwAgMQASNP8xABIRRLEisgE0AyRbsggjshA0/7IHs0IB3UghBzQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8lWzX+IQRbNf1XMCA1/CRbNftJNQU1+oAEOLAjLTT6ULAyBjQDIRJbDEQ0/zEAEkQyBjT9CDX5NP80/hZQNP0WUDT8UDT7FlA0+lA0+RZQKEsBVwB/ZylLAVd/AWdIIQ01ATIGNQJCAXFJIwxAAI5JIQgMQABAIQgSRCM0ARJENARJIhJMNAISEUQoZDUDgARBsUBNsDIGNAMhE1sPRLEisgE0AyVbsggjshA0A1cAILIHs0IBCEgjNAESRDQESSISTDQCEhFEKGRJNQMlWzX/gASai5F0sDIGNAMhE1sMRDT/iAFHNANXACA0/zQDIQRbMQAjMgY0/0kIQgBgSIGgjQaIASciNAESRDQESSISTDQCEhFESTUFSSJbNf8hBVs1/oAErNEfwzT/FlA0/hZQsDT/iAD2MgY0/gg1/TEANP8WUDT+FlA0/RZQKEsBVwA4Z0gjNQEyBjUCQgB9Nf81/jX9Nfw1+zX6Nfk0/SMSQQAvNP40+wg1+DT5NPoWUDT7FlA0/FA0/xZQNPgWUChLAVcAYGdIIQc1ATIGNQJCADmxIrIBIQg0+guyCCOyEDT8NPk0/SISTbIHs0IAADEZIQcSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAzE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 176,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v459",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v460",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v459",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v460",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v559",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e11",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v574",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v575",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e12",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e13",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v590",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v591",
                "type": "uint256"
              }
            ],
            "internalType": "struct T24",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T25",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e14",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e15",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v516",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v529",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v546",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v559",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m11",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v574",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v575",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m12",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m13",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v590",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v591",
                "type": "uint256"
              }
            ],
            "internalType": "struct T24",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T25",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m14",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m15",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v516",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v529",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v546",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162002b3938038062002b398339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b6127bc806200037d6000396000f3fe6080604052600436106100f65760003560e01c8063832307571161008f578063a209ad4e11610061578063a209ad4e146101f6578063ab53f2c614610209578063b608682e1461022c578063bf2c5b241461023f578063de7369981461025257005b806383230757146101a85780638b9fadc8146101bd5780638e314769146101d0578063980b6eac146101e357005b80633a3e43b0116100c85780633a3e43b01461015c5780635471c5a81461016f57806379b8ead7146101825780637eea518c1461019557005b80631e93b0f1146100ff57806329bdceb9146101235780632c10a159146101365780633a31ddbd1461014957005b366100fd57005b005b34801561010b57600080fd5b506003545b6040519081526020015b60405180910390f35b6100fd6101313660046120ff565b610265565b6100fd6101443660046120ff565b610520565b6100fd6101573660046120ff565b6106af565b6100fd61016a366004612134565b610866565b6100fd61017d3660046120ff565b610ae2565b6100fd610190366004612134565b610c3d565b6100fd6101a33660046120ff565b610ec8565b3480156101b457600080fd5b50600154610110565b6100fd6101cb3660046120ff565b61102b565b6100fd6101de3660046120ff565b6111c3565b6100fd6101f13660046120ff565b61131d565b6100fd6102043660046120ff565b61158f565b34801561021557600080fd5b5061021e6117d2565b60405161011a929190612150565b6100fd61023a3660046120ff565b61186f565b6100fd61024d3660046120ff565b611aab565b6100fd6102603660046120ff565b611c05565b6102756009600054146026611d5b565b61028f8135158061028857506001548235145b6027611d5b565b6000808055600280546102a1906121ad565b80601f01602080910402602001604051908101604052809291908181526020018280546102cd906121ad565b801561031a5780601f106102ef5761010080835404028352916020019161031a565b820191906000526020600020905b8154815290600101906020018083116102fd57829003601f168201915b50505050508060200190518101906103329190612268565b905061034a6040518060200160405280600081525090565b61035b8260e0015143106028611d5b565b7f976e76238b62fa1fe413b3051329828ffdf33cbe50b9b9a6e353e59f26de8968338460405161038c929190612314565b60405180910390a16103a034156024611d5b565b60608201516103bb906001600160a01b031633146025611d5b565b6103c9438360400151611d81565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c080860151908401528581013560e08401528351610100840152600b6000554360015590516104f59183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0828101519082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b60405160208183030381529060405260029080519060200190610519929190611fb8565b5050505050565b6105306001600054146009611d5b565b61054a8135158061054357506001548235145b600a611d5b565b60008080556002805461055c906121ad565b80601f0160208091040260200160405190810160405280929190818152602001828054610588906121ad565b80156105d55780601f106105aa576101008083540402835291602001916105d5565b820191906000526020600020905b8154815290600101906020018083116105b857829003601f168201915b50505050508060200190518101906105ed919061233b565b905061060081606001514310600b611d5b565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516106319291906123b4565b60405180910390a161064a816020015134146008611d5b565b61065261203c565b815181516001600160a01b03909116905260208083018051835183015260408085015184519091015282513360609091015281830180516001905251439201919091525180016020820151604001526106aa81611dd4565b505050565b6106bf600f60005414604b611d5b565b6106d9813515806106d257506001548235145b604c611d5b565b6000808055600280546106eb906121ad565b80601f0160208091040260200160405190810160405280929190818152602001828054610717906121ad565b80156107645780601f1061073957610100808354040283529160200191610764565b820191906000526020600020905b81548152906001019060200180831161074757829003601f168201915b505050505080602001905181019061077c9190612484565b9050610791816101200151431015604d611d5b565b7f25e51d2f848b9d4b7b439abc02e736d9b5c0f74cf1c0a0a6cddab55c2ab0626b33836040516107c29291906123b4565b60405180910390a16107d634156049611d5b565b805161080a906001600160a01b031633146108005760608201516001600160a01b03163314610803565b60015b604a611d5b565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f1935050505015801561084b573d6000803e3d6000fd5b506000808055600181905561086290600290612095565b5050565b610876600f600054146046611d5b565b6108908135158061088957506001548235145b6047611d5b565b6000808055600280546108a2906121ad565b80601f01602080910402602001604051908101604052809291908181526020018280546108ce906121ad565b801561091b5780601f106108f05761010080835404028352916020019161091b565b820191906000526020600020905b8154815290600101906020018083116108fe57829003601f168201915b50505050508060200190518101906109339190612484565b9050610952604051806040016040528060008152602001600081525090565b61096482610120015143106048611d5b565b7fd1dd1b4b9285adf2c5ce90518e14323d4af41c7bfad5f681c09261f64252d99733846040516109959291906124a1565b60405180910390a16109a934156043611d5b565b81516109c1906001600160a01b031633146044611d5b565b60408051610a0d916109e791602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a00151146045611d5b565b610a208261010001518360c00151611d81565b602082015260e082015160408401351415610a3e5760018152610a75565b602081015160408401351415610a575760008152610a75565b8160e0015181602001511415610a705760028152610a75565b600181525b610a7d61203c565b825181516001600160a01b039182169052602080850151835182015260408086015184518201526060808701518551941693019290925283518184018051919091528051439201919091526080850151905190910152610adc81611dd4565b50505050565b610af2600d600054146040611d5b565b610b0c81351580610b0557506001548235145b6041611d5b565b600080805560028054610b1e906121ad565b80601f0160208091040260200160405190810160405280929190818152602001828054610b4a906121ad565b8015610b975780601f10610b6c57610100808354040283529160200191610b97565b820191906000526020600020905b815481529060010190602001808311610b7a57829003601f168201915b5050505050806020019051810190610baf9190612484565b9050610bc48161012001514310156042611d5b565b7f5c210ac1145c4e16faf75d6fa61460a7b8f80dc41bba4f6bdf744f79007642983383604051610bf59291906123b4565b60405180910390a1610c093415603e611d5b565b805161080a906001600160a01b03163314610c335760608201516001600160a01b03163314610c36565b60015b603f611d5b565b610c4d600d60005414603b611d5b565b610c6781351580610c6057506001548235145b603c611d5b565b600080805560028054610c79906121ad565b80601f0160208091040260200160405190810160405280929190818152602001828054610ca5906121ad565b8015610cf25780601f10610cc757610100808354040283529160200191610cf2565b820191906000526020600020905b815481529060010190602001808311610cd557829003601f168201915b5050505050806020019051810190610d0a9190612484565b9050610d226040518060200160405280600081525090565b610d348261012001514310603d611d5b565b7f67f1c804af90d1a1d51d795a9796fb7e0cd7fdc00118103dfd79581713b75e4d3384604051610d659291906124a1565b60405180910390a1610d7934156038611d5b565b8151610d91906001600160a01b031633146039611d5b565b60408051610ddd91610db791602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a0015114603a611d5b565b610deb438360400151611d81565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260c08086015160a085015260e08087015191850191909152610100808701519185019190915286830135908401528351610120840152600f6000554360015590516104f59183910161254d565b610ed8600160005414600d611d5b565b610ef281351580610eeb57506001548235145b600e611d5b565b600080805560028054610f04906121ad565b80601f0160208091040260200160405190810160405280929190818152602001828054610f30906121ad565b8015610f7d5780601f10610f5257610100808354040283529160200191610f7d565b820191906000526020600020905b815481529060010190602001808311610f6057829003601f168201915b5050505050806020019051810190610f95919061233b565b9050610fa98160600151431015600f611d5b565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d9503383604051610fda9291906123b4565b60405180910390a1610fee3415600c611d5b565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561084b573d6000803e3d6000fd5b61103b600b600054146035611d5b565b6110558135158061104e57506001548235145b6036611d5b565b600080805560028054611067906121ad565b80601f0160208091040260200160405190810160405280929190818152602001828054611093906121ad565b80156110e05780601f106110b5576101008083540402835291602001916110e0565b820191906000526020600020905b8154815290600101906020018083116110c357829003601f168201915b50505050508060200190518101906110f8919061255c565b905061110d8161010001514310156037611d5b565b7f63bba27b9239a4737471a2862db7b80ba95dfab2aa0da84664e856a1ed63a550338360405161113e9291906123b4565b60405180910390a161115234156033611d5b565b8051611186906001600160a01b0316331461117c5760608201516001600160a01b0316331461117f565b60015b6034611d5b565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561084b573d6000803e3d6000fd5b6111d36005600054146017611d5b565b6111ed813515806111e657506001548235145b6018611d5b565b6000808055600280546111ff906121ad565b80601f016020809104026020016040519081016040528092919081815260200182805461122b906121ad565b80156112785780601f1061124d57610100808354040283529160200191611278565b820191906000526020600020905b81548152906001019060200180831161125b57829003601f168201915b505050505080602001905181019061129091906125e5565b90506112a48160a001514310156019611d5b565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d33836040516112d59291906123b4565b60405180910390a16112e934156015611d5b565b805161080a906001600160a01b031633146113135760608201516001600160a01b03163314611316565b60015b6016611d5b565b61132d600760005414601c611d5b565b6113478135158061134057506001548235145b601d611d5b565b600080805560028054611359906121ad565b80601f0160208091040260200160405190810160405280929190818152602001828054611385906121ad565b80156113d25780601f106113a7576101008083540402835291602001916113d2565b820191906000526020600020905b8154815290600101906020018083116113b557829003601f168201915b50505050508060200190518101906113ea9190612679565b90506114026040518060200160405280600081525090565b6114138260c001514310601e611d5b565b7fa2ddd0bc62239facbd79cdab1df75ee0cb72af9166d4371e62852a98cb4ca19c3384604051611444929190612314565b60405180910390a16114583415601a611d5b565b8151611470906001600160a01b03163314601b611d5b565b61147e438360400151611d81565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a080860151908401528581013560c0840152835160e084015260096000554360015590516104f59183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b61159f6005600054146012611d5b565b6115b9813515806115b257506001548235145b6013611d5b565b6000808055600280546115cb906121ad565b80601f01602080910402602001604051908101604052809291908181526020018280546115f7906121ad565b80156116445780601f1061161957610100808354040283529160200191611644565b820191906000526020600020905b81548152906001019060200180831161162757829003601f168201915b505050505080602001905181019061165c91906125e5565b90506116746040518060200160405280600081525090565b6116858260a0015143106014611d5b565b7f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc033846040516116b6929190612314565b60405180910390a16116ca34156010611d5b565b81516116e2906001600160a01b031633146011611d5b565b6116f0438360400151611d81565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915282516001600160a01b039081168083526020808601518185019081526040808801518187019081526060808a015187168189019081526080808c0151818b019081528d88013560a0808d019182528d5160c0808f0191825260076000554360015589519b8c019c909c529851978a0197909752945193880193909352905190971696850196909652945190830152925191810191909152905160e0820152610100016104f5565b6000606060005460028080546117e7906121ad565b80601f0160208091040260200160405190810160405280929190818152602001828054611813906121ad565b80156118605780601f1061183557610100808354040283529160200191611860565b820191906000526020600020905b81548152906001019060200180831161184357829003601f168201915b50505050509050915091509091565b61187f600b600054146030611d5b565b6118998135158061189257506001548235145b6031611d5b565b6000808055600280546118ab906121ad565b80601f01602080910402602001604051908101604052809291908181526020018280546118d7906121ad565b80156119245780601f106118f957610100808354040283529160200191611924565b820191906000526020600020905b81548152906001019060200180831161190757829003601f168201915b505050505080602001905181019061193c919061255c565b90506119546040518060200160405280600081525090565b61196682610100015143106032611d5b565b7fe4891dc1b339486b9840f8d0c004ee6b9adfc0e7f704831a66f664617244ab1f3384604051611997929190612314565b60405180910390a16119ab3415602e611d5b565b60608201516119c6906001600160a01b03163314602f611d5b565b6119d4438360400151611d81565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c0808601519084015260e08086015190840152858101356101008401528351610120840152600d6000554360015590516104f59183910161254d565b611abb6007600054146021611d5b565b611ad581351580611ace57506001548235145b6022611d5b565b600080805560028054611ae7906121ad565b80601f0160208091040260200160405190810160405280929190818152602001828054611b13906121ad565b8015611b605780601f10611b3557610100808354040283529160200191611b60565b820191906000526020600020905b815481529060010190602001808311611b4357829003601f168201915b5050505050806020019051810190611b789190612679565b9050611b8c8160c001514310156023611d5b565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051611bbd9291906123b4565b60405180910390a1611bd13415601f611d5b565b805161080a906001600160a01b03163314611bfb5760608201516001600160a01b03163314611bfe565b60015b6020611d5b565b611c15600960005414602b611d5b565b611c2f81351580611c2857506001548235145b602c611d5b565b600080805560028054611c41906121ad565b80601f0160208091040260200160405190810160405280929190818152602001828054611c6d906121ad565b8015611cba5780601f10611c8f57610100808354040283529160200191611cba565b820191906000526020600020905b815481529060010190602001808311611c9d57829003601f168201915b5050505050806020019051810190611cd29190612268565b9050611ce68160e00151431015602d611d5b565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd3383604051611d179291906123b4565b60405180910390a1611d2b34156029611d5b565b8051611186906001600160a01b03163314611d555760608201516001600160a01b03163314611d58565b60015b602a5b816108625760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b600082611d8e838261272d565b9150811015611dce5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401611d78565b92915050565b60408051602081019091526000815260208201515160011415611ef857611e0b826020015160200151836000015160400151611d81565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b01518401516080808b019182528b5160a0808d019182526005600055436001558751998a019a909a529651958801959095529251918601919091525190951690830152925191810191909152905160c082015260e00160405160208183030381529060405260029080519060200190610adc929190611fb8565b60208201515115611f0e57815160600151611f12565b8151515b6001600160a01b03166108fc611f316002856000015160200151611f59565b6040518115909202916000818181858888f1935050505015801561084b573d6000803e3d6000fd5b6000811580611f7d57508282611f6f8183612745565b9250611f7b9083612764565b145b611dce5760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401611d78565b828054611fc4906121ad565b90600052602060002090601f016020900481019282611fe6576000855561202c565b82601f10611fff57805160ff191683800117855561202c565b8280016001018555821561202c579182015b8281111561202c578251825591602001919060010190612011565b506120389291506120d2565b5090565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190815260200161209060405180606001604052806000815260200160008152602001600081525090565b905290565b5080546120a1906121ad565b6000825580601f106120b1575050565b601f0160209004906000526020600020908101906120cf91906120d2565b50565b5b8082111561203857600081556001016120d3565b6000604082840312156120f957600080fd5b50919050565b60006040828403121561211157600080fd5b61211b83836120e7565b9392505050565b6000606082840312156120f957600080fd5b60006060828403121561214657600080fd5b61211b8383612122565b82815260006020604081840152835180604085015260005b8181101561218457858101830151858201606001528201612168565b81811115612196576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806121c157607f821691505b602082108114156120f957634e487b7160e01b600052602260045260246000fd5b604051610140810167ffffffffffffffff8111828210171561221457634e487b7160e01b600052604160045260246000fd5b60405290565b604051610120810167ffffffffffffffff8111828210171561221457634e487b7160e01b600052604160045260246000fd5b80516001600160a01b038116811461226357600080fd5b919050565b600061010080838503121561227c57600080fd5b6040519081019067ffffffffffffffff821181831017156122ad57634e487b7160e01b600052604160045260246000fd5b816040526122ba8461224c565b815260208401516020820152604084015160408201526122dc6060850161224c565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b6001600160a01b03831681526060810161211b602083018480358252602090810135910152565b60006080828403121561234d57600080fd5b6040516080810181811067ffffffffffffffff8211171561237e57634e487b7160e01b600052604160045260246000fd5b60405261238a8361224c565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b0383168152813560208083019190915260608201908301358015158082146123e257600080fd5b80604085015250509392505050565b6000610140828403121561240457600080fd5b61240c6121e2565b90506124178261224c565b815260208201516020820152604082015160408201526124396060830161224c565b60608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e082015261010080830151818301525061012080830151818301525092915050565b6000610140828403121561249757600080fd5b61211b83836123f1565b6001600160a01b03831681526080810161211b60208301848035825260208082013590830152604090810135910152565b80516001600160a01b031682526020810151602083015260408101516040830152606081015161250d60608401826001600160a01b03169052565b506080818101519083015260a0808201519083015260c0808201519083015260e08082015190830152610100808201519083015261012090810151910152565b6101408101611dce82846124d2565b6000610120828403121561256f57600080fd5b61257761221a565b6125808361224c565b815260208301516020820152604083015160408201526125a26060840161224c565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b600060c082840312156125f757600080fd5b60405160c0810181811067ffffffffffffffff8211171561262857634e487b7160e01b600052604160045260246000fd5b6040526126348361224c565b815260208301516020820152604083015160408201526126566060840161224c565b60608201526080830151608082015260a083015160a08201528091505092915050565b600060e0828403121561268b57600080fd5b60405160e0810181811067ffffffffffffffff821117156126bc57634e487b7160e01b600052604160045260246000fd5b6040526126c88361224c565b815260208301516020820152604083015160408201526126ea6060840161224c565b60608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561274057612740612717565b500190565b600081600019048311821515161561275f5761275f612717565b500290565b60008261278157634e487b7160e01b600052601260045260246000fd5b50049056fea2646970667358221220bb32940befb79a85f735e8953528cfbae88258f12d0588bff2f9a845bfacaff864736f6c634300080c0033`,
  BytecodeLen: 11065,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:95:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:101:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:200:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:107:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:129:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:130:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:132:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:133:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:153:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:154:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:156:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  13: {
    at: './index.rsh:157:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  14: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:169:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  15: {
    at: './index.rsh:171:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  16: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:174:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Faufau": Faufau,
  "Paupau": Paupau
  };
export const _APIs = {
  };
