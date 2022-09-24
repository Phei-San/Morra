// Automatically generated with Reach 0.1.11 (98ccf409)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (98ccf409)';
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
      15: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1],
      17: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]
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
  
  
  const v498 = stdlib.protect(ctc0, interact.deadline, 'for Faufau\'s interact field deadline');
  const v499 = stdlib.protect(ctc0, interact.wager, 'for Faufau\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v499, v498],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:93:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v499, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v503, v504], secs: v506, time: v505, didSend: v71, from: v502 } = txn1;
      
      sim_r.txns.push({
        amt: v503,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v515 = stdlib.safeAdd(v505, v504);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v503, v504], secs: v506, time: v505, didSend: v71, from: v502 } = txn1;
  ;
  const v515 = stdlib.safeAdd(v505, v504);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v515],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v502, v503, v504, v515],
      evt_cnt: 0,
      funcNum: 2,
      lct: v505,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v806, time: v805, didSend: v443, from: v804 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v502,
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
    const {data: [], secs: v806, time: v805, didSend: v443, from: v804 } = txn3;
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
    const {data: [], secs: v521, time: v520, didSend: v80, from: v519 } = txn2;
    const v523 = stdlib.add(v503, v503);
    ;
    let v524 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v525 = v520;
    let v532 = v523;
    
    let txn3 = txn2;
    while (await (async () => {
      const v540 = stdlib.eq(v524, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v540;})()) {
      const v547 = stdlib.safeAdd(v525, v504);
      const v551 = stdlib.protect(ctc0, await interact.getFinger(), {
        at: './index.rsh:113:53:application',
        fs: ['at ./index.rsh:109:20:application call to [unknown function] (defined at: ./index.rsh:109:24:function exp)'],
        msg: 'getFinger',
        who: 'Faufau'
        });
      const v552 = stdlib.protect(ctc0, await interact.getGuess(v551), {
        at: './index.rsh:114:51:application',
        fs: ['at ./index.rsh:109:20:application call to [unknown function] (defined at: ./index.rsh:109:24:function exp)'],
        msg: 'getGuess',
        who: 'Faufau'
        });
      const v553 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:118:64:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:109:20:application call to [unknown function] (defined at: ./index.rsh:109:24:function exp)'],
        msg: 'random',
        who: 'Faufau'
        });
      const v554 = stdlib.digest([ctc0, ctc0], [v553, v551]);
      const v556 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:120:74:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:109:20:application call to [unknown function] (defined at: ./index.rsh:109:24:function exp)'],
        msg: 'random',
        who: 'Faufau'
        });
      const v557 = stdlib.digest([ctc0, ctc0], [v556, v552]);
      
      const txn4 = await (ctc.sendrecv({
        args: [v502, v503, v504, v519, v532, v547, v554],
        evt_cnt: 1,
        funcNum: 4,
        lct: v525,
        onlyIf: true,
        out_tys: [ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:128:16:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v560], secs: v562, time: v561, didSend: v111, from: v559 } = txn4;
          
          ;
          const v570 = stdlib.safeAdd(v561, v504);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v547],
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc1],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v502, v503, v504, v519, v532, v547],
          evt_cnt: 0,
          funcNum: 5,
          lct: v525,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v772, time: v771, didSend: v396, from: v770 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v519,
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
        const {data: [], secs: v772, time: v771, didSend: v396, from: v770 } = txn5;
        ;
        const v773 = stdlib.addressEq(v502, v770);
        const v774 = stdlib.addressEq(v519, v770);
        const v775 = v773 ? true : v774;
        stdlib.assert(v775, {
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
        const {data: [v560], secs: v562, time: v561, didSend: v111, from: v559 } = txn4;
        ;
        const v563 = stdlib.addressEq(v502, v559);
        stdlib.assert(v563, {
          at: './index.rsh:128:16:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Faufau'
          });
        const v570 = stdlib.safeAdd(v561, v504);
        const txn5 = await (ctc.sendrecv({
          args: [v502, v503, v504, v519, v532, v560, v570, v557],
          evt_cnt: 1,
          funcNum: 6,
          lct: v561,
          onlyIf: true,
          out_tys: [ctc1],
          pay: [stdlib.checkedBigNumberify('./index.rsh:131:16:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v573], secs: v575, time: v574, didSend: v117, from: v572 } = txn5;
            
            ;
            const v583 = stdlib.safeAdd(v574, v504);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v570],
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc0, ctc1],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v502, v503, v504, v519, v532, v560, v570],
            evt_cnt: 0,
            funcNum: 7,
            lct: v561,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v754, time: v753, didSend: v362, from: v752 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v519,
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
          const {data: [], secs: v754, time: v753, didSend: v362, from: v752 } = txn6;
          ;
          const v755 = stdlib.addressEq(v502, v752);
          const v756 = stdlib.addressEq(v519, v752);
          const v757 = v755 ? true : v756;
          stdlib.assert(v757, {
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
          const {data: [v573], secs: v575, time: v574, didSend: v117, from: v572 } = txn5;
          ;
          const v576 = stdlib.addressEq(v502, v572);
          stdlib.assert(v576, {
            at: './index.rsh:131:16:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Faufau'
            });
          const v583 = stdlib.safeAdd(v574, v504);
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 8,
            out_tys: [ctc0],
            timeoutAt: ['time', v583],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v502, v503, v504, v519, v532, v560, v573, v583],
              evt_cnt: 0,
              funcNum: 9,
              lct: v574,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v736, time: v735, didSend: v328, from: v734 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v502,
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
            const {data: [], secs: v736, time: v735, didSend: v328, from: v734 } = txn7;
            ;
            const v737 = stdlib.addressEq(v502, v734);
            const v738 = stdlib.addressEq(v519, v734);
            const v739 = v737 ? true : v738;
            stdlib.assert(v739, {
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
            const {data: [v590], secs: v592, time: v591, didSend: v128, from: v589 } = txn6;
            ;
            const v593 = stdlib.addressEq(v519, v589);
            stdlib.assert(v593, {
              at: './index.rsh:148:16:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Faufau'
              });
            const v600 = stdlib.safeAdd(v591, v504);
            const txn7 = await (ctc.recv({
              didSend: false,
              evt_cnt: 1,
              funcNum: 10,
              out_tys: [ctc0],
              timeoutAt: ['time', v600],
              waitIfNotPresent: false
              }));
            if (txn7.didTimeout) {
              const txn8 = await (ctc.sendrecv({
                args: [v502, v503, v504, v519, v532, v560, v573, v590, v600],
                evt_cnt: 0,
                funcNum: 11,
                lct: v591,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn8) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [], secs: v718, time: v717, didSend: v294, from: v716 } = txn8;
                  
                  ;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v502,
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
              const {data: [], secs: v718, time: v717, didSend: v294, from: v716 } = txn8;
              ;
              const v719 = stdlib.addressEq(v502, v716);
              const v720 = stdlib.addressEq(v519, v716);
              const v721 = v719 ? true : v720;
              stdlib.assert(v721, {
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
              const {data: [v603], secs: v605, time: v604, didSend: v134, from: v602 } = txn7;
              ;
              const v606 = stdlib.addressEq(v519, v602);
              stdlib.assert(v606, {
                at: './index.rsh:155:16:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Faufau'
                });
              const v613 = stdlib.safeAdd(v604, v504);
              const txn8 = await (ctc.sendrecv({
                args: [v502, v503, v504, v519, v532, v560, v573, v590, v603, v613, v553, v551],
                evt_cnt: 2,
                funcNum: 12,
                lct: v604,
                onlyIf: true,
                out_tys: [ctc0, ctc0],
                pay: [stdlib.checkedBigNumberify('./index.rsh:167:16:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn8) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [v618, v619], secs: v621, time: v620, didSend: v144, from: v617 } = txn8;
                  
                  ;
                  const v631 = stdlib.safeAdd(v620, v504);
                  sim_r.isHalt = false;
                  
                  return sim_r;
                  }),
                soloSend: true,
                timeoutAt: ['time', v613],
                tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              if (txn8.didTimeout) {
                const txn9 = await (ctc.sendrecv({
                  args: [v502, v503, v504, v519, v532, v560, v573, v590, v603, v613],
                  evt_cnt: 0,
                  funcNum: 13,
                  lct: v604,
                  onlyIf: true,
                  out_tys: [],
                  pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                  sim_p: (async (txn9) => {
                    const sim_r = { txns: [], mapRefs: [], maps: [] };
                    let sim_txn_ctr = stdlib.UInt_max;
                    const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                    
                    
                    const {data: [], secs: v700, time: v699, didSend: v260, from: v698 } = txn9;
                    
                    ;
                    sim_r.txns.push({
                      kind: 'from',
                      to: v519,
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
                const {data: [], secs: v700, time: v699, didSend: v260, from: v698 } = txn9;
                ;
                const v701 = stdlib.addressEq(v502, v698);
                const v702 = stdlib.addressEq(v519, v698);
                const v703 = v701 ? true : v702;
                stdlib.assert(v703, {
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
                const {data: [v618, v619], secs: v621, time: v620, didSend: v144, from: v617 } = txn8;
                ;
                const v622 = stdlib.addressEq(v502, v617);
                stdlib.assert(v622, {
                  at: './index.rsh:167:16:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Faufau'
                  });
                const v623 = stdlib.digest([ctc0, ctc0], [v618, v619]);
                const v624 = stdlib.digestEq(v560, v623);
                stdlib.assert(v624, {
                  at: 'reach standard library:69:17:application',
                  fs: ['at ./index.rsh:170:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                  msg: null,
                  who: 'Faufau'
                  });
                const v631 = stdlib.safeAdd(v620, v504);
                const txn9 = await (ctc.sendrecv({
                  args: [v502, v503, v504, v519, v532, v573, v590, v603, v619, v631, v556, v552],
                  evt_cnt: 2,
                  funcNum: 14,
                  lct: v620,
                  onlyIf: true,
                  out_tys: [ctc0, ctc0],
                  pay: [stdlib.checkedBigNumberify('./index.rsh:173:16:decimal', stdlib.UInt_max, '0'), []],
                  sim_p: (async (txn9) => {
                    const sim_r = { txns: [], mapRefs: [], maps: [] };
                    let sim_txn_ctr = stdlib.UInt_max;
                    const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                    
                    
                    const {data: [v634, v635], secs: v637, time: v636, didSend: v154, from: v633 } = txn9;
                    
                    ;
                    const v647 = stdlib.safeAdd(v636, v504);
                    sim_r.isHalt = false;
                    
                    return sim_r;
                    }),
                  soloSend: true,
                  timeoutAt: ['time', v631],
                  tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                  waitIfNotPresent: false
                  }));
                if (txn9.didTimeout) {
                  const txn10 = await (ctc.sendrecv({
                    args: [v502, v503, v504, v519, v532, v573, v590, v603, v619, v631],
                    evt_cnt: 0,
                    funcNum: 15,
                    lct: v620,
                    onlyIf: true,
                    out_tys: [],
                    pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                    sim_p: (async (txn10) => {
                      const sim_r = { txns: [], mapRefs: [], maps: [] };
                      let sim_txn_ctr = stdlib.UInt_max;
                      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                      
                      
                      const {data: [], secs: v682, time: v681, didSend: v226, from: v680 } = txn10;
                      
                      ;
                      sim_r.txns.push({
                        kind: 'from',
                        to: v519,
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
                  const {data: [], secs: v682, time: v681, didSend: v226, from: v680 } = txn10;
                  ;
                  const v683 = stdlib.addressEq(v502, v680);
                  const v684 = stdlib.addressEq(v519, v680);
                  const v685 = v683 ? true : v684;
                  stdlib.assert(v685, {
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
                  const {data: [v634, v635], secs: v637, time: v636, didSend: v154, from: v633 } = txn9;
                  ;
                  const v638 = stdlib.addressEq(v502, v633);
                  stdlib.assert(v638, {
                    at: './index.rsh:173:16:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Faufau'
                    });
                  const v639 = stdlib.digest([ctc0, ctc0], [v634, v635]);
                  const v640 = stdlib.digestEq(v573, v639);
                  stdlib.assert(v640, {
                    at: 'reach standard library:69:17:application',
                    fs: ['at ./index.rsh:175:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                    msg: null,
                    who: 'Faufau'
                    });
                  const v647 = stdlib.safeAdd(v636, v504);
                  const v651 = stdlib.safeAdd(v619, v590);
                  stdlib.protect(ctc2, await interact.seeWinning(v651), {
                    at: './index.rsh:180:32:application',
                    fs: ['at ./index.rsh:178:20:application call to [unknown function] (defined at: ./index.rsh:178:24:function exp)'],
                    msg: 'seeWinning',
                    who: 'Faufau'
                    });
                  
                  const txn10 = await (ctc.sendrecv({
                    args: [v502, v503, v504, v519, v532, v590, v603, v619, v635, v647, v651],
                    evt_cnt: 1,
                    funcNum: 16,
                    lct: v636,
                    onlyIf: true,
                    out_tys: [ctc0],
                    pay: [stdlib.checkedBigNumberify('./index.rsh:183:16:decimal', stdlib.UInt_max, '0'), []],
                    sim_p: (async (txn10) => {
                      const sim_r = { txns: [], mapRefs: [], maps: [] };
                      let sim_txn_ctr = stdlib.UInt_max;
                      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                      
                      
                      const {data: [v653], secs: v655, time: v654, didSend: v167, from: v652 } = txn10;
                      
                      ;
                      let v657;
                      const v658 = stdlib.safeAdd(v619, v590);
                      const v659 = stdlib.eq(v635, v603);
                      if (v659) {
                        v657 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                        }
                      else {
                        const v660 = stdlib.eq(v658, v635);
                        if (v660) {
                          v657 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                          }
                        else {
                          const v661 = stdlib.eq(v658, v603);
                          if (v661) {
                            v657 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                            }
                          else {
                            v657 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                            }
                          }
                        }
                      const cv524 = v657;
                      const cv525 = v654;
                      const cv532 = v532;
                      
                      await (async () => {
                        const v524 = cv524;
                        const v525 = cv525;
                        const v532 = cv532;
                        
                        if (await (async () => {
                          const v540 = stdlib.eq(v524, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                          
                          return v540;})()) {
                          const v547 = stdlib.safeAdd(v525, v504);
                          sim_r.isHalt = false;
                          }
                        else {
                          const v788 = stdlib.eq(v524, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
                          const v791 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:199:14:decimal', stdlib.UInt_max, '2'), v503);
                          const v793 = v788 ? v502 : v519;
                          sim_r.txns.push({
                            kind: 'from',
                            to: v793,
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
                    timeoutAt: ['time', v647],
                    tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                    waitIfNotPresent: false
                    }));
                  if (txn10.didTimeout) {
                    const txn11 = await (ctc.sendrecv({
                      args: [v502, v503, v504, v519, v532, v590, v603, v619, v635, v647],
                      evt_cnt: 0,
                      funcNum: 17,
                      lct: v636,
                      onlyIf: true,
                      out_tys: [],
                      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                      sim_p: (async (txn11) => {
                        const sim_r = { txns: [], mapRefs: [], maps: [] };
                        let sim_txn_ctr = stdlib.UInt_max;
                        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                        
                        
                        const {data: [], secs: v664, time: v663, didSend: v192, from: v662 } = txn11;
                        
                        ;
                        sim_r.txns.push({
                          kind: 'from',
                          to: v502,
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
                      tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                      waitIfNotPresent: false
                      }));
                    const {data: [], secs: v664, time: v663, didSend: v192, from: v662 } = txn11;
                    ;
                    const v665 = stdlib.addressEq(v502, v662);
                    const v666 = stdlib.addressEq(v519, v662);
                    const v667 = v665 ? true : v666;
                    stdlib.assert(v667, {
                      at: 'reach standard library:197:11:dot',
                      fs: ['at ./index.rsh:184:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                      msg: 'sender correct',
                      who: 'Faufau'
                      });
                    ;
                    stdlib.protect(ctc2, await interact.informTimeout(), {
                      at: './index.rsh:84:35:application',
                      fs: ['at ./index.rsh:83:13:application call to [unknown function] (defined at: ./index.rsh:83:35:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:82:30:function exp)', 'at ./index.rsh:184:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                      msg: 'informTimeout',
                      who: 'Faufau'
                      });
                    
                    return;
                    
                    }
                  else {
                    const {data: [v653], secs: v655, time: v654, didSend: v167, from: v652 } = txn10;
                    ;
                    const v656 = stdlib.addressEq(v502, v652);
                    stdlib.assert(v656, {
                      at: './index.rsh:183:16:dot',
                      fs: [],
                      msg: 'sender correct',
                      who: 'Faufau'
                      });
                    let v657;
                    const v658 = stdlib.safeAdd(v619, v590);
                    const v659 = stdlib.eq(v635, v603);
                    if (v659) {
                      v657 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                      }
                    else {
                      const v660 = stdlib.eq(v658, v635);
                      if (v660) {
                        v657 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                        }
                      else {
                        const v661 = stdlib.eq(v658, v603);
                        if (v661) {
                          v657 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                          }
                        else {
                          v657 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                          }
                        }
                      }
                    const cv524 = v657;
                    const cv525 = v654;
                    const cv532 = v532;
                    
                    v524 = cv524;
                    v525 = cv525;
                    v532 = cv532;
                    
                    txn3 = txn10;
                    continue;}
                  
                  }
                
                }
              
              }
            
            }
          
          }
        
        }
      
      }
    const v788 = stdlib.eq(v524, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    const v791 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:199:14:decimal', stdlib.UInt_max, '2'), v503);
    const v793 = v788 ? v502 : v519;
    ;
    stdlib.protect(ctc2, await interact.seeOutcome(v524), {
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
  const {data: [v503, v504], secs: v506, time: v505, didSend: v71, from: v502 } = txn1;
  ;
  const v515 = stdlib.safeAdd(v505, v504);
  stdlib.protect(ctc1, await interact.acceptWager(v503), {
    at: './index.rsh:98:29:application',
    fs: ['at ./index.rsh:97:16:application call to [unknown function] (defined at: ./index.rsh:97:20:function exp)'],
    msg: 'acceptWager',
    who: 'Paupau'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v502, v503, v504, v515],
    evt_cnt: 0,
    funcNum: 1,
    lct: v505,
    onlyIf: true,
    out_tys: [],
    pay: [v503, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v521, time: v520, didSend: v80, from: v519 } = txn2;
      
      const v523 = stdlib.add(v503, v503);
      sim_r.txns.push({
        amt: v503,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v524 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v525 = v520;
      const v532 = v523;
      
      if (await (async () => {
        const v540 = stdlib.eq(v524, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v540;})()) {
        const v547 = stdlib.safeAdd(v525, v504);
        sim_r.isHalt = false;
        }
      else {
        const v788 = stdlib.eq(v524, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        const v791 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:199:14:decimal', stdlib.UInt_max, '2'), v503);
        const v793 = v788 ? v502 : v519;
        sim_r.txns.push({
          kind: 'from',
          to: v793,
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
    timeoutAt: ['time', v515],
    tys: [ctc3, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v502, v503, v504, v515],
      evt_cnt: 0,
      funcNum: 2,
      lct: v505,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v806, time: v805, didSend: v443, from: v804 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v502,
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
    const {data: [], secs: v806, time: v805, didSend: v443, from: v804 } = txn3;
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
    const {data: [], secs: v521, time: v520, didSend: v80, from: v519 } = txn2;
    const v523 = stdlib.add(v503, v503);
    ;
    let v524 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v525 = v520;
    let v532 = v523;
    
    let txn3 = txn2;
    while (await (async () => {
      const v540 = stdlib.eq(v524, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v540;})()) {
      const v547 = stdlib.safeAdd(v525, v504);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc2],
        timeoutAt: ['time', v547],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v502, v503, v504, v519, v532, v547],
          evt_cnt: 0,
          funcNum: 5,
          lct: v525,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v772, time: v771, didSend: v396, from: v770 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v519,
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
        const {data: [], secs: v772, time: v771, didSend: v396, from: v770 } = txn5;
        ;
        const v773 = stdlib.addressEq(v502, v770);
        const v774 = stdlib.addressEq(v519, v770);
        const v775 = v773 ? true : v774;
        stdlib.assert(v775, {
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
        const {data: [v560], secs: v562, time: v561, didSend: v111, from: v559 } = txn4;
        ;
        const v563 = stdlib.addressEq(v502, v559);
        stdlib.assert(v563, {
          at: './index.rsh:128:16:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Paupau'
          });
        const v570 = stdlib.safeAdd(v561, v504);
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc2],
          timeoutAt: ['time', v570],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v502, v503, v504, v519, v532, v560, v570],
            evt_cnt: 0,
            funcNum: 7,
            lct: v561,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v754, time: v753, didSend: v362, from: v752 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v519,
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
          const {data: [], secs: v754, time: v753, didSend: v362, from: v752 } = txn6;
          ;
          const v755 = stdlib.addressEq(v502, v752);
          const v756 = stdlib.addressEq(v519, v752);
          const v757 = v755 ? true : v756;
          stdlib.assert(v757, {
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
          const {data: [v573], secs: v575, time: v574, didSend: v117, from: v572 } = txn5;
          ;
          const v576 = stdlib.addressEq(v502, v572);
          stdlib.assert(v576, {
            at: './index.rsh:131:16:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Paupau'
            });
          const v583 = stdlib.safeAdd(v574, v504);
          const v587 = stdlib.protect(ctc0, await interact.getFinger(), {
            at: './index.rsh:141:53:application',
            fs: ['at ./index.rsh:140:20:application call to [unknown function] (defined at: ./index.rsh:140:24:function exp)'],
            msg: 'getFinger',
            who: 'Paupau'
            });
          const v588 = stdlib.protect(ctc0, await interact.getGuess(v587), {
            at: './index.rsh:142:51:application',
            fs: ['at ./index.rsh:140:20:application call to [unknown function] (defined at: ./index.rsh:140:24:function exp)'],
            msg: 'getGuess',
            who: 'Paupau'
            });
          
          const txn6 = await (ctc.sendrecv({
            args: [v502, v503, v504, v519, v532, v560, v573, v583, v587],
            evt_cnt: 1,
            funcNum: 8,
            lct: v574,
            onlyIf: true,
            out_tys: [ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:148:16:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v590], secs: v592, time: v591, didSend: v128, from: v589 } = txn6;
              
              ;
              const v600 = stdlib.safeAdd(v591, v504);
              sim_r.isHalt = false;
              
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v583],
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v502, v503, v504, v519, v532, v560, v573, v583],
              evt_cnt: 0,
              funcNum: 9,
              lct: v574,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v736, time: v735, didSend: v328, from: v734 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v502,
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
            const {data: [], secs: v736, time: v735, didSend: v328, from: v734 } = txn7;
            ;
            const v737 = stdlib.addressEq(v502, v734);
            const v738 = stdlib.addressEq(v519, v734);
            const v739 = v737 ? true : v738;
            stdlib.assert(v739, {
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
            const {data: [v590], secs: v592, time: v591, didSend: v128, from: v589 } = txn6;
            ;
            const v593 = stdlib.addressEq(v519, v589);
            stdlib.assert(v593, {
              at: './index.rsh:148:16:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Paupau'
              });
            const v600 = stdlib.safeAdd(v591, v504);
            const txn7 = await (ctc.sendrecv({
              args: [v502, v503, v504, v519, v532, v560, v573, v590, v600, v588],
              evt_cnt: 1,
              funcNum: 10,
              lct: v591,
              onlyIf: true,
              out_tys: [ctc0],
              pay: [stdlib.checkedBigNumberify('./index.rsh:155:16:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [v603], secs: v605, time: v604, didSend: v134, from: v602 } = txn7;
                
                ;
                const v613 = stdlib.safeAdd(v604, v504);
                sim_r.isHalt = false;
                
                return sim_r;
                }),
              soloSend: true,
              timeoutAt: ['time', v600],
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            if (txn7.didTimeout) {
              const txn8 = await (ctc.sendrecv({
                args: [v502, v503, v504, v519, v532, v560, v573, v590, v600],
                evt_cnt: 0,
                funcNum: 11,
                lct: v591,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn8) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [], secs: v718, time: v717, didSend: v294, from: v716 } = txn8;
                  
                  ;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v502,
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
              const {data: [], secs: v718, time: v717, didSend: v294, from: v716 } = txn8;
              ;
              const v719 = stdlib.addressEq(v502, v716);
              const v720 = stdlib.addressEq(v519, v716);
              const v721 = v719 ? true : v720;
              stdlib.assert(v721, {
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
              const {data: [v603], secs: v605, time: v604, didSend: v134, from: v602 } = txn7;
              ;
              const v606 = stdlib.addressEq(v519, v602);
              stdlib.assert(v606, {
                at: './index.rsh:155:16:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Paupau'
                });
              const v613 = stdlib.safeAdd(v604, v504);
              const txn8 = await (ctc.recv({
                didSend: false,
                evt_cnt: 2,
                funcNum: 12,
                out_tys: [ctc0, ctc0],
                timeoutAt: ['time', v613],
                waitIfNotPresent: false
                }));
              if (txn8.didTimeout) {
                const txn9 = await (ctc.sendrecv({
                  args: [v502, v503, v504, v519, v532, v560, v573, v590, v603, v613],
                  evt_cnt: 0,
                  funcNum: 13,
                  lct: v604,
                  onlyIf: true,
                  out_tys: [],
                  pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                  sim_p: (async (txn9) => {
                    const sim_r = { txns: [], mapRefs: [], maps: [] };
                    let sim_txn_ctr = stdlib.UInt_max;
                    const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                    
                    
                    const {data: [], secs: v700, time: v699, didSend: v260, from: v698 } = txn9;
                    
                    ;
                    sim_r.txns.push({
                      kind: 'from',
                      to: v519,
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
                const {data: [], secs: v700, time: v699, didSend: v260, from: v698 } = txn9;
                ;
                const v701 = stdlib.addressEq(v502, v698);
                const v702 = stdlib.addressEq(v519, v698);
                const v703 = v701 ? true : v702;
                stdlib.assert(v703, {
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
                const {data: [v618, v619], secs: v621, time: v620, didSend: v144, from: v617 } = txn8;
                ;
                const v622 = stdlib.addressEq(v502, v617);
                stdlib.assert(v622, {
                  at: './index.rsh:167:16:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Paupau'
                  });
                const v623 = stdlib.digest([ctc0, ctc0], [v618, v619]);
                const v624 = stdlib.digestEq(v560, v623);
                stdlib.assert(v624, {
                  at: 'reach standard library:69:17:application',
                  fs: ['at ./index.rsh:170:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                  msg: null,
                  who: 'Paupau'
                  });
                const v631 = stdlib.safeAdd(v620, v504);
                const txn9 = await (ctc.recv({
                  didSend: false,
                  evt_cnt: 2,
                  funcNum: 14,
                  out_tys: [ctc0, ctc0],
                  timeoutAt: ['time', v631],
                  waitIfNotPresent: false
                  }));
                if (txn9.didTimeout) {
                  const txn10 = await (ctc.sendrecv({
                    args: [v502, v503, v504, v519, v532, v573, v590, v603, v619, v631],
                    evt_cnt: 0,
                    funcNum: 15,
                    lct: v620,
                    onlyIf: true,
                    out_tys: [],
                    pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                    sim_p: (async (txn10) => {
                      const sim_r = { txns: [], mapRefs: [], maps: [] };
                      let sim_txn_ctr = stdlib.UInt_max;
                      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                      
                      
                      const {data: [], secs: v682, time: v681, didSend: v226, from: v680 } = txn10;
                      
                      ;
                      sim_r.txns.push({
                        kind: 'from',
                        to: v519,
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
                  const {data: [], secs: v682, time: v681, didSend: v226, from: v680 } = txn10;
                  ;
                  const v683 = stdlib.addressEq(v502, v680);
                  const v684 = stdlib.addressEq(v519, v680);
                  const v685 = v683 ? true : v684;
                  stdlib.assert(v685, {
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
                  const {data: [v634, v635], secs: v637, time: v636, didSend: v154, from: v633 } = txn9;
                  ;
                  const v638 = stdlib.addressEq(v502, v633);
                  stdlib.assert(v638, {
                    at: './index.rsh:173:16:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Paupau'
                    });
                  const v639 = stdlib.digest([ctc0, ctc0], [v634, v635]);
                  const v640 = stdlib.digestEq(v573, v639);
                  stdlib.assert(v640, {
                    at: 'reach standard library:69:17:application',
                    fs: ['at ./index.rsh:175:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                    msg: null,
                    who: 'Paupau'
                    });
                  const v647 = stdlib.safeAdd(v636, v504);
                  const txn10 = await (ctc.recv({
                    didSend: false,
                    evt_cnt: 1,
                    funcNum: 16,
                    out_tys: [ctc0],
                    timeoutAt: ['time', v647],
                    waitIfNotPresent: false
                    }));
                  if (txn10.didTimeout) {
                    const txn11 = await (ctc.sendrecv({
                      args: [v502, v503, v504, v519, v532, v590, v603, v619, v635, v647],
                      evt_cnt: 0,
                      funcNum: 17,
                      lct: v636,
                      onlyIf: true,
                      out_tys: [],
                      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                      sim_p: (async (txn11) => {
                        const sim_r = { txns: [], mapRefs: [], maps: [] };
                        let sim_txn_ctr = stdlib.UInt_max;
                        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                        
                        
                        const {data: [], secs: v664, time: v663, didSend: v192, from: v662 } = txn11;
                        
                        ;
                        sim_r.txns.push({
                          kind: 'from',
                          to: v502,
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
                      tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                      waitIfNotPresent: false
                      }));
                    const {data: [], secs: v664, time: v663, didSend: v192, from: v662 } = txn11;
                    ;
                    const v665 = stdlib.addressEq(v502, v662);
                    const v666 = stdlib.addressEq(v519, v662);
                    const v667 = v665 ? true : v666;
                    stdlib.assert(v667, {
                      at: 'reach standard library:197:11:dot',
                      fs: ['at ./index.rsh:184:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                      msg: 'sender correct',
                      who: 'Paupau'
                      });
                    ;
                    stdlib.protect(ctc1, await interact.informTimeout(), {
                      at: './index.rsh:84:35:application',
                      fs: ['at ./index.rsh:83:13:application call to [unknown function] (defined at: ./index.rsh:83:35:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:82:30:function exp)', 'at ./index.rsh:184:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                      msg: 'informTimeout',
                      who: 'Paupau'
                      });
                    
                    return;
                    
                    }
                  else {
                    const {data: [v653], secs: v655, time: v654, didSend: v167, from: v652 } = txn10;
                    ;
                    const v656 = stdlib.addressEq(v502, v652);
                    stdlib.assert(v656, {
                      at: './index.rsh:183:16:dot',
                      fs: [],
                      msg: 'sender correct',
                      who: 'Paupau'
                      });
                    let v657;
                    const v658 = stdlib.safeAdd(v619, v590);
                    const v659 = stdlib.eq(v635, v603);
                    if (v659) {
                      v657 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                      }
                    else {
                      const v660 = stdlib.eq(v658, v635);
                      if (v660) {
                        v657 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                        }
                      else {
                        const v661 = stdlib.eq(v658, v603);
                        if (v661) {
                          v657 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                          }
                        else {
                          v657 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                          }
                        }
                      }
                    const cv524 = v657;
                    const cv525 = v654;
                    const cv532 = v532;
                    
                    v524 = cv524;
                    v525 = cv525;
                    v532 = cv532;
                    
                    txn3 = txn10;
                    continue;}
                  
                  }
                
                }
              
              }
            
            }
          
          }
        
        }
      
      }
    const v788 = stdlib.eq(v524, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    const v791 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:199:14:decimal', stdlib.UInt_max, '2'), v503);
    const v793 = v788 ? v502 : v519;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v524), {
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
  appApproval: `BiAVAAFQICgIEXgFCQ0PAguYAQdYoAGQAagBMCYDAQABAQAiNQAxGEEJACpkSSJbNQEhBVs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIQkMQASsSSEKDEACf0khCwxAAVhJgRAMQAD+SSEGDEAAViEGEkQhBjQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABACB0o6wMgY0AyEHWw9ENP8xABI0A1cwIDEAEhFEsSKyATQDJFuyCCOyEDT/sgezQggPSCEGNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSVcAIDX/gWBbNf6BcFs1/Uk1BRc1/IAEfoUQcTT8FlCwMgY0AyEHWwxENP8xABJENAOBaFs0AyEQWwg1+jT9NP4SQQAGIzX7QgAgNPo0/RJBAAYiNftCABI0+jT+EkEAByEMNftCAAMjNfs0/zQDJVs0AyEEWzQDVzAgNPsyBjQDJFtCBw1IIQs0ARJENARJIhJMNAISEUQoZClkUEk1A1cwIDX/gARGR4xesDIGNAMhElsPRDQDVwAgMQASNP8xABIRRLEisgE0AyRbsggjshA0/7IHs0IHG0mBDgxAAMZIIQs0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpXACA1/yVbNf4hBFs1/VcwIDX8JFs1+yEHWzX6gYABWzX5gYgBWzX4STUFSSJbNfchBVs19oAEva7n1TT3FlA09hZQsDIGNAMhElsMRDT/MQASRDQDV1ggNPcWNPYWUAESRDIGNP0INfU0/zT+FlA0/RZQNPxQNPsWUDT6FlA0+RZQNPgWUDT2FlA09RZQKEsBVwB/ZylLAVd/AWdIIQY1ATIGNQJCBmpIIQo0ARJENARJIhJMNAISEUQoZClkUEk1A1cwIDX/gAQin5cDsDIGNAMhE1sPRDQDVwAgMQASNP8xABIRRLEisgE0AyRbsggjshA0/7IHs0IF+0khDQxAAR1JgQwMQADDSCEKNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKVwAgNf8lWzX+IQRbNf1XMCA1/CRbNftXeCA1+iEOWzX5IRFbNfhJNQVJIls19yEFWzX2gATDqpDBNPcWUDT2FlCwMgY0AyETWwxENP8xABJENANXWCA09xY09hZQARJEMgY0/Qg19TT/NP4WUDT9FlA0/FA0+xZQNPpQNPkWUDT4FlA09hZQNPUWUChLAVcAf2cpSwFXfxlnSCELNQEyBjUCQgVGSCENNAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/4AE49k2NbAyBjQDIRFbD0Q0/zEAEjQDVzAgMQASEUSxIrIBNAMkW7III7IQNP+yB7NCBNdJgQoMQACoSCENNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKVwAgNf8lWzX+IQRbNf1XMCA1/CRbNftXWCA1+ld4IDX5IQ5bNfhJNQUXNfeABKeLwgs09xZQsDIGNAMhEVsMRDT8MQASRDIGNP0INfY0/zT+FlA0/RZQNPxQNPsWUDT6UDT5UDT4FlA09xZQNPYWUChLAVcAf2cpSwFXfzFnSCEKNQEyBjUCQgRESCEJNAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/4AEogVmjrAyBjQDIQ5bD0Q0/zEAEjQDVzAgMQASEUSxIrIBNAMkW7III7IQNP+yB7NCA9VJIQgMQAHqSSEPDEAA+UkhBQxAAJ9IIQk0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSklXACA1/yVbNf4hBFs1/VcwIDX8JFs1+1dYIDX6V3ggNflJNQUXNfiABC/a6R00+BZQsDIGNAMhDlsMRDT8MQASRDIGNP0INfc0/zT+FlA0/RZQNPxQNPsWUDT6UDT5UDT4FlA09xZQKEsBVwB/ZylLAVd/KWdIIQ01ATIGNQJCAz1IIQ80ARJENARJIhJMNAISEUQoZClkUEk1A1cwIDX/gATiG7OpsDIGNAMhB1sPRDQDVwAgMQASNP8xABIRRLEisgE0AyRbsggjshA0/7IHs0ICzkmBBgxAAJNIIQ80ARJENARJIhJMNAISEUQoZClkUEk1A0lKSlcAIDX/JVs1/iEEWzX9VzAgNfwkWzX7V1ggNfpJNQU1+YAEae47PjT5ULAyBjQDIQdbDEQ0/zEAEkQyBjT9CDX4NP80/hZQNP0WUDT8UDT7FlA0+lA0+VA0+BZQKEsBVwB/ZylLAVd/IWdIIQk1ATIGNQJCAlBIIQg0ARJENARJIhJMNAISEUQoZEk1A1cwIDX/gATMmZJcsDIGNAMhEFsPRDQDVwAgMQASNP8xABIRRLEisgE0AyRbsggjshA0/7IHs0IB5EkhDAxAAM9JgQQMQACISCEINAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yVbNf4hBFs1/VcwIDX8JFs1+0k1BTX6gAQ4sCMtNPpQsDIGNAMhEFsMRDT/MQASRDIGNP0INfk0/zT+FlA0/RZQNPxQNPsWUDT6UDT5FlAoSwFXAH9nKUsBV38BZ0ghDzUBMgY1AkIBaiEMEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIRRbD0SxIrIBNAMlW7III7IQNANXACCyB7NCAQ5JIwxAAEdIIzQBEkQ0BEkiEkw0AhIRRChkSTUDJVs1/4AEmouRdLAyBjQDIRRbDEQ0/4gBRzQDVwAgNP80AyEEWzEAIzIGNP9JCEIAYEiBoI0GiAEnIjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/IQVbNf6ABKzRH8M0/xZQNP4WULA0/4gA9jIGNP4INf0xADT/FlA0/hZQNP0WUChLAVcAOGdIIzUBMgY1AkIAfTX/Nf41/TX8Nfs1+jX5NP0jEkEALzT+NPsINfg0+TT6FlA0+xZQNPxQNP8WUDT4FlAoSwFXAGBnSCEINQEyBjUCQgA5sSKyASEMNPoLsggjshA0/DT5NP0iEk2yB7NCAAAxGSEIEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQMxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 176,
  unsupported: [],
  version: 10,
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
                "name": "v503",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v504",
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
                "name": "v503",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v504",
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
                "name": "v603",
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
                "name": "v618",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v619",
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
                "name": "v634",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v635",
                "type": "uint256"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v653",
                "type": "uint256"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T28",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e16",
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
    "name": "_reach_e17",
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
                "name": "v560",
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
                "name": "v573",
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
                "name": "v590",
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
                "name": "v603",
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
                "name": "v618",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v619",
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
                "name": "v634",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v635",
                "type": "uint256"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T26",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v653",
                "type": "uint256"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T28",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m16",
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
    "name": "_reach_m17",
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
                "name": "v560",
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
                "name": "v573",
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
                "name": "v590",
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
  Bytecode: `0x608060405260405162002f1438038062002f148339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b612b97806200037d6000396000f3fe60806040526004361061010c5760003560e01c80638b9fadc81161009a578063ab53f2c611610061578063ab53f2c614610232578063b608682e14610255578063bf2c5b2414610268578063de7369981461027b578063f37e1b9b1461028e57005b80638b9fadc8146101d35780638e314769146101e6578063980b6eac146101f95780639f2518101461020c578063a209ad4e1461021f57005b80633a3e43b0116100de5780633a3e43b0146101725780635471c5a81461018557806379b8ead7146101985780637eea518c146101ab57806383230757146101be57005b80631e93b0f11461011557806329bdceb9146101395780632c10a1591461014c5780633a31ddbd1461015f57005b3661011357005b005b34801561012157600080fd5b506003545b6040519081526020015b60405180910390f35b6101136101473660046124da565b6102a1565b61011361015a3660046124da565b61055c565b61011361016d3660046124da565b6106eb565b61011361018036600461250f565b6108a2565b6101136101933660046124da565b610b2d565b6101136101a636600461250f565b610c88565b6101136101b93660046124da565b610f13565b3480156101ca57600080fd5b50600154610126565b6101136101e13660046124da565b611076565b6101136101f43660046124da565b61120e565b6101136102073660046124da565b611368565b61011361021a3660046124da565b6115da565b61011361022d3660046124da565b611735565b34801561023e57600080fd5b50610247611978565b60405161013092919061252b565b6101136102633660046124da565b611a15565b6101136102763660046124da565b611c51565b6101136102893660046124da565b611dab565b61011361029c3660046124da565b611f05565b6102b16009600054146026612136565b6102cb813515806102c457506001548235145b6027612136565b6000808055600280546102dd90612588565b80601f016020809104026020016040519081016040528092919081815260200182805461030990612588565b80156103565780601f1061032b57610100808354040283529160200191610356565b820191906000526020600020905b81548152906001019060200180831161033957829003601f168201915b505050505080602001905181019061036e9190612643565b90506103866040518060200160405280600081525090565b6103978260e0015143106028612136565b7f976e76238b62fa1fe413b3051329828ffdf33cbe50b9b9a6e353e59f26de896833846040516103c89291906126ef565b60405180910390a16103dc34156024612136565b60608201516103f7906001600160a01b031633146025612136565b61040543836040015161215c565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c080860151908401528581013560e08401528351610100840152600b6000554360015590516105319183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0828101519082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b60405160208183030381529060405260029080519060200190610555929190612393565b5050505050565b61056c6001600054146009612136565b6105868135158061057f57506001548235145b600a612136565b60008080556002805461059890612588565b80601f01602080910402602001604051908101604052809291908181526020018280546105c490612588565b80156106115780601f106105e657610100808354040283529160200191610611565b820191906000526020600020905b8154815290600101906020018083116105f457829003601f168201915b50505050508060200190518101906106299190612716565b905061063c81606001514310600b612136565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161066d92919061278f565b60405180910390a1610686816020015134146008612136565b61068e612417565b815181516001600160a01b03909116905260208083018051835183015260408085015184519091015282513360609091015281830180516001905251439201919091525180016020820151604001526106e6816121af565b505050565b6106fb600f60005414604b612136565b6107158135158061070e57506001548235145b604c612136565b60008080556002805461072790612588565b80601f016020809104026020016040519081016040528092919081815260200182805461075390612588565b80156107a05780601f10610775576101008083540402835291602001916107a0565b820191906000526020600020905b81548152906001019060200180831161078357829003601f168201915b50505050508060200190518101906107b8919061285f565b90506107cd816101200151431015604d612136565b7f25e51d2f848b9d4b7b439abc02e736d9b5c0f74cf1c0a0a6cddab55c2ab0626b33836040516107fe92919061278f565b60405180910390a161081234156049612136565b8051610846906001600160a01b0316331461083c5760608201516001600160a01b0316331461083f565b60015b604a612136565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f19350505050158015610887573d6000803e3d6000fd5b506000808055600181905561089e90600290612470565b5050565b6108b2600f600054146046612136565b6108cc813515806108c557506001548235145b6047612136565b6000808055600280546108de90612588565b80601f016020809104026020016040519081016040528092919081815260200182805461090a90612588565b80156109575780601f1061092c57610100808354040283529160200191610957565b820191906000526020600020905b81548152906001019060200180831161093a57829003601f168201915b505050505080602001905181019061096f919061285f565b90506109876040518060200160405280600081525090565b61099982610120015143106048612136565b7fd1dd1b4b9285adf2c5ce90518e14323d4af41c7bfad5f681c09261f64252d99733846040516109ca92919061287c565b60405180910390a16109de34156043612136565b81516109f6906001600160a01b031633146044612136565b60408051610a4291610a1c91602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a00151146045612136565b610a5043836040015161215c565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260c08086015160a085015260e08087015191850191909152610100808701519185019190915286830135908401528351610120840152601160005543600155905161053191839101612928565b610b3d600d600054146040612136565b610b5781351580610b5057506001548235145b6041612136565b600080805560028054610b6990612588565b80601f0160208091040260200160405190810160405280929190818152602001828054610b9590612588565b8015610be25780601f10610bb757610100808354040283529160200191610be2565b820191906000526020600020905b815481529060010190602001808311610bc557829003601f168201915b5050505050806020019051810190610bfa919061285f565b9050610c0f8161012001514310156042612136565b7f5c210ac1145c4e16faf75d6fa61460a7b8f80dc41bba4f6bdf744f79007642983383604051610c4092919061278f565b60405180910390a1610c543415603e612136565b8051610846906001600160a01b03163314610c7e5760608201516001600160a01b03163314610c81565b60015b603f612136565b610c98600d60005414603b612136565b610cb281351580610cab57506001548235145b603c612136565b600080805560028054610cc490612588565b80601f0160208091040260200160405190810160405280929190818152602001828054610cf090612588565b8015610d3d5780601f10610d1257610100808354040283529160200191610d3d565b820191906000526020600020905b815481529060010190602001808311610d2057829003601f168201915b5050505050806020019051810190610d55919061285f565b9050610d6d6040518060200160405280600081525090565b610d7f8261012001514310603d612136565b7f67f1c804af90d1a1d51d795a9796fb7e0cd7fdc00118103dfd79581713b75e4d3384604051610db092919061287c565b60405180910390a1610dc434156038612136565b8151610ddc906001600160a01b031633146039612136565b60408051610e2891610e0291602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a0015114603a612136565b610e3643836040015161215c565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260c08086015160a085015260e08087015191850191909152610100808701519185019190915286830135908401528351610120840152600f60005543600155905161053191839101612928565b610f23600160005414600d612136565b610f3d81351580610f3657506001548235145b600e612136565b600080805560028054610f4f90612588565b80601f0160208091040260200160405190810160405280929190818152602001828054610f7b90612588565b8015610fc85780601f10610f9d57610100808354040283529160200191610fc8565b820191906000526020600020905b815481529060010190602001808311610fab57829003601f168201915b5050505050806020019051810190610fe09190612716565b9050610ff48160600151431015600f612136565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338360405161102592919061278f565b60405180910390a16110393415600c612136565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610887573d6000803e3d6000fd5b611086600b600054146035612136565b6110a08135158061109957506001548235145b6036612136565b6000808055600280546110b290612588565b80601f01602080910402602001604051908101604052809291908181526020018280546110de90612588565b801561112b5780601f106111005761010080835404028352916020019161112b565b820191906000526020600020905b81548152906001019060200180831161110e57829003601f168201915b50505050508060200190518101906111439190612937565b90506111588161010001514310156037612136565b7f63bba27b9239a4737471a2862db7b80ba95dfab2aa0da84664e856a1ed63a550338360405161118992919061278f565b60405180910390a161119d34156033612136565b80516111d1906001600160a01b031633146111c75760608201516001600160a01b031633146111ca565b60015b6034612136565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610887573d6000803e3d6000fd5b61121e6005600054146017612136565b6112388135158061123157506001548235145b6018612136565b60008080556002805461124a90612588565b80601f016020809104026020016040519081016040528092919081815260200182805461127690612588565b80156112c35780601f10611298576101008083540402835291602001916112c3565b820191906000526020600020905b8154815290600101906020018083116112a657829003601f168201915b50505050508060200190518101906112db91906129c0565b90506112ef8160a001514310156019612136565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d338360405161132092919061278f565b60405180910390a161133434156015612136565b8051610846906001600160a01b0316331461135e5760608201516001600160a01b03163314611361565b60015b6016612136565b611378600760005414601c612136565b6113928135158061138b57506001548235145b601d612136565b6000808055600280546113a490612588565b80601f01602080910402602001604051908101604052809291908181526020018280546113d090612588565b801561141d5780601f106113f25761010080835404028352916020019161141d565b820191906000526020600020905b81548152906001019060200180831161140057829003601f168201915b50505050508060200190518101906114359190612a54565b905061144d6040518060200160405280600081525090565b61145e8260c001514310601e612136565b7fa2ddd0bc62239facbd79cdab1df75ee0cb72af9166d4371e62852a98cb4ca19c338460405161148f9291906126ef565b60405180910390a16114a33415601a612136565b81516114bb906001600160a01b03163314601b612136565b6114c943836040015161215c565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a080860151908401528581013560c0840152835160e084015260096000554360015590516105319183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b6115ea6011600054146055612136565b611604813515806115fd57506001548235145b6056612136565b60008080556002805461161690612588565b80601f016020809104026020016040519081016040528092919081815260200182805461164290612588565b801561168f5780601f106116645761010080835404028352916020019161168f565b820191906000526020600020905b81548152906001019060200180831161167257829003601f168201915b50505050508060200190518101906116a7919061285f565b90506116bc8161012001514310156057612136565b7f64113158b98ebf731808bbb342c34e04d362d554ea35de57d908ad65e9eed23533836040516116ed92919061278f565b60405180910390a161170134156053612136565b80516111d1906001600160a01b0316331461172b5760608201516001600160a01b0316331461172e565b60015b6054612136565b6117456005600054146012612136565b61175f8135158061175857506001548235145b6013612136565b60008080556002805461177190612588565b80601f016020809104026020016040519081016040528092919081815260200182805461179d90612588565b80156117ea5780601f106117bf576101008083540402835291602001916117ea565b820191906000526020600020905b8154815290600101906020018083116117cd57829003601f168201915b505050505080602001905181019061180291906129c0565b905061181a6040518060200160405280600081525090565b61182b8260a0015143106014612136565b7f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc0338460405161185c9291906126ef565b60405180910390a161187034156010612136565b8151611888906001600160a01b031633146011612136565b61189643836040015161215c565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915282516001600160a01b039081168083526020808601518185019081526040808801518187019081526060808a015187168189019081526080808c0151818b019081528d88013560a0808d019182528d5160c0808f0191825260076000554360015589519b8c019c909c529851978a0197909752945193880193909352905190971696850196909652945190830152925191810191909152905160e082015261010001610531565b60006060600054600280805461198d90612588565b80601f01602080910402602001604051908101604052809291908181526020018280546119b990612588565b8015611a065780601f106119db57610100808354040283529160200191611a06565b820191906000526020600020905b8154815290600101906020018083116119e957829003601f168201915b50505050509050915091509091565b611a25600b600054146030612136565b611a3f81351580611a3857506001548235145b6031612136565b600080805560028054611a5190612588565b80601f0160208091040260200160405190810160405280929190818152602001828054611a7d90612588565b8015611aca5780601f10611a9f57610100808354040283529160200191611aca565b820191906000526020600020905b815481529060010190602001808311611aad57829003601f168201915b5050505050806020019051810190611ae29190612937565b9050611afa6040518060200160405280600081525090565b611b0c82610100015143106032612136565b7fe4891dc1b339486b9840f8d0c004ee6b9adfc0e7f704831a66f664617244ab1f3384604051611b3d9291906126ef565b60405180910390a1611b513415602e612136565b6060820151611b6c906001600160a01b03163314602f612136565b611b7a43836040015161215c565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c0808601519084015260e08086015190840152858101356101008401528351610120840152600d60005543600155905161053191839101612928565b611c616007600054146021612136565b611c7b81351580611c7457506001548235145b6022612136565b600080805560028054611c8d90612588565b80601f0160208091040260200160405190810160405280929190818152602001828054611cb990612588565b8015611d065780601f10611cdb57610100808354040283529160200191611d06565b820191906000526020600020905b815481529060010190602001808311611ce957829003601f168201915b5050505050806020019051810190611d1e9190612a54565b9050611d328160c001514310156023612136565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051611d6392919061278f565b60405180910390a1611d773415601f612136565b8051610846906001600160a01b03163314611da15760608201516001600160a01b03163314611da4565b60015b6020612136565b611dbb600960005414602b612136565b611dd581351580611dce57506001548235145b602c612136565b600080805560028054611de790612588565b80601f0160208091040260200160405190810160405280929190818152602001828054611e1390612588565b8015611e605780601f10611e3557610100808354040283529160200191611e60565b820191906000526020600020905b815481529060010190602001808311611e4357829003601f168201915b5050505050806020019051810190611e789190612643565b9050611e8c8160e00151431015602d612136565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd3383604051611ebd92919061278f565b60405180910390a1611ed134156029612136565b80516111d1906001600160a01b03163314611efb5760608201516001600160a01b03163314611efe565b60015b602a612136565b611f156011600054146050612136565b611f2f81351580611f2857506001548235145b6051612136565b600080805560028054611f4190612588565b80601f0160208091040260200160405190810160405280929190818152602001828054611f6d90612588565b8015611fba5780601f10611f8f57610100808354040283529160200191611fba565b820191906000526020600020905b815481529060010190602001808311611f9d57829003601f168201915b5050505050806020019051810190611fd2919061285f565b9050611ff1604051806040016040528060008152602001600081525090565b61200382610120015143106052612136565b7f766f2c6dd42a0af16e854477c4e7575763994a6ce78f7dd208ae78a809469ee433846040516120349291906126ef565b60405180910390a16120483415604e612136565b8151612060906001600160a01b03163314604f612136565b6120728260e001518360a0015161215c565b602082015260c0820151610100830151141561209157600181526120c9565b816101000151816020015114156120ab57600081526120c9565b8160c00151816020015114156120c457600281526120c9565b600181525b6120d1612417565b825181516001600160a01b039182169052602080850151835182015260408086015184518201526060808701518551941693019290925283518184018051919091528051439201919091526080850151905190910152612130816121af565b50505050565b8161089e5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000826121698382612b08565b91508110156121a95760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401612153565b92915050565b604080516020810190915260008152602082015151600114156122d3576121e682602001516020015183600001516040015161215c565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b01518401516080808b019182528b5160a0808d019182526005600055436001558751998a019a909a529651958801959095529251918601919091525190951690830152925191810191909152905160c082015260e00160405160208183030381529060405260029080519060200190612130929190612393565b602082015151156122e9578151606001516122ed565b8151515b6001600160a01b03166108fc61230c6002856000015160200151612334565b6040518115909202916000818181858888f19350505050158015610887573d6000803e3d6000fd5b60008115806123585750828261234a8183612b20565b92506123569083612b3f565b145b6121a95760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401612153565b82805461239f90612588565b90600052602060002090601f0160209004810192826123c15760008555612407565b82601f106123da57805160ff1916838001178555612407565b82800160010185558215612407579182015b828111156124075782518255916020019190600101906123ec565b506124139291506124ad565b5090565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190815260200161246b60405180606001604052806000815260200160008152602001600081525090565b905290565b50805461247c90612588565b6000825580601f1061248c575050565b601f0160209004906000526020600020908101906124aa91906124ad565b50565b5b8082111561241357600081556001016124ae565b6000604082840312156124d457600080fd5b50919050565b6000604082840312156124ec57600080fd5b6124f683836124c2565b9392505050565b6000606082840312156124d457600080fd5b60006060828403121561252157600080fd5b6124f683836124fd565b82815260006020604081840152835180604085015260005b8181101561255f57858101830151858201606001528201612543565b81811115612571576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061259c57607f821691505b602082108114156124d457634e487b7160e01b600052602260045260246000fd5b604051610140810167ffffffffffffffff811182821017156125ef57634e487b7160e01b600052604160045260246000fd5b60405290565b604051610120810167ffffffffffffffff811182821017156125ef57634e487b7160e01b600052604160045260246000fd5b80516001600160a01b038116811461263e57600080fd5b919050565b600061010080838503121561265757600080fd5b6040519081019067ffffffffffffffff8211818310171561268857634e487b7160e01b600052604160045260246000fd5b8160405261269584612627565b815260208401516020820152604084015160408201526126b760608501612627565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b6001600160a01b0383168152606081016124f6602083018480358252602090810135910152565b60006080828403121561272857600080fd5b6040516080810181811067ffffffffffffffff8211171561275957634e487b7160e01b600052604160045260246000fd5b60405261276583612627565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b0383168152813560208083019190915260608201908301358015158082146127bd57600080fd5b80604085015250509392505050565b600061014082840312156127df57600080fd5b6127e76125bd565b90506127f282612627565b8152602082015160208201526040820151604082015261281460608301612627565b60608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e082015261010080830151818301525061012080830151818301525092915050565b6000610140828403121561287257600080fd5b6124f683836127cc565b6001600160a01b0383168152608081016124f660208301848035825260208082013590830152604090810135910152565b80516001600160a01b03168252602081015160208301526040810151604083015260608101516128e860608401826001600160a01b03169052565b506080818101519083015260a0808201519083015260c0808201519083015260e08082015190830152610100808201519083015261012090810151910152565b61014081016121a982846128ad565b6000610120828403121561294a57600080fd5b6129526125f5565b61295b83612627565b8152602083015160208201526040830151604082015261297d60608401612627565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b600060c082840312156129d257600080fd5b60405160c0810181811067ffffffffffffffff82111715612a0357634e487b7160e01b600052604160045260246000fd5b604052612a0f83612627565b81526020830151602082015260408301516040820152612a3160608401612627565b60608201526080830151608082015260a083015160a08201528091505092915050565b600060e08284031215612a6657600080fd5b60405160e0810181811067ffffffffffffffff82111715612a9757634e487b7160e01b600052604160045260246000fd5b604052612aa383612627565b81526020830151602082015260408301516040820152612ac560608401612627565b60608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115612b1b57612b1b612af2565b500190565b6000816000190483118215151615612b3a57612b3a612af2565b500290565b600082612b5c57634e487b7160e01b600052601260045260246000fd5b50049056fea2646970667358221220df4a91644f3397af8a84ea56ade499e9f089c07a8a13a49e4e133afa12ca5d0564736f6c634300080c0033`,
  BytecodeLen: 12052,
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
    },
  17: {
    at: './index.rsh:176:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  18: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:184:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
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
