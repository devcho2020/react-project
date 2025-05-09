import React from 'react'
import { useState, useRef, useEffect } from 'react';
import { useCoinContext } from '../../context/CoinContext';

const Jjangkemppo = () => {

  const { coinValue, addCoin, useCoin: minusCoin, coinChargeChances} = useCoinContext();
  const [resultMsg, setResultMsg] = useState('');
  const [reward, setReward] = useState(0);
  const [resultMsgList, setResultMsgList] = useState([]);
  const jjangkemppoValues = ['바위', '보자기', '가위'];
  const rewardvalues = [0, 2, 1, 5, 2, 0, 1, 2, 10, 0, 4, 2, 1, 2, 9, 0, 1, 2, 30, 0, 0, 2, 1, 3, 2, 0, 1, 2];
  const msgEndRef = useRef(null);   // 스크롤 이동을 위해  

  // 컴퓨터 값
  const getComputerValue = () => {
    return jjangkemppoValues[Math.floor(Math.random() * jjangkemppoValues.length)];
  }
  // 결과 확인
  const getResult = (myValue) => {
    const computerValue = getComputerValue();
    if(myValue === computerValue) {
        setResultMsgList(prev => [...prev, '비겼다!']);
        return '비겼다!';
    }
    if((myValue === '가위' && computerValue === '바위')
        || (myValue === '바위' && computerValue === '보자기')
        || (myValue === '보자기' && computerValue === '가위')) {
            setResultMsgList(prev => [...prev, '졌다 ㅠ']);
        return '졌다 ㅠ';
    } else {
        const resultReward = rewardvalues[Math.floor(Math.random() * rewardvalues.length)];
        const rewardValue = 100 * resultReward;
        setReward(rewardValue);
        addCoin(rewardValue);
        setResultMsgList(prev => [...prev, `이겼다! 보상: ${rewardValue}`]);
        return '이겼다!';
    }
  }

  // 사용자 선택 시 이벤트
  
  const selectMyValue = (myValue) => {
    if(!minusCoin(100)) return;
    const resultMsg = getResult(jjangkemppoValues[myValue]);
    setResultMsg(resultMsg);
  }

  useEffect(() => {
    if (msgEndRef.current) {
      msgEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [resultMsgList]);

  return (
    <div>
        <div>보유 코인 : {coinValue} / 충전 횟수 : {coinChargeChances}</div>
        <div onClick={() => selectMyValue(2)}>가위</div>
        <div onClick={() => selectMyValue(1)}>보자기</div>
        <div onClick={() => selectMyValue(0)}>바위</div>
        <div>결과 : {resultMsg}</div>
        <div>리워드 : {reward}</div>
        <div className='max-h-40 overflow-scroll'>
            {resultMsgList.map((item, index) => (
                <p key={index}>{index + 1} : {item}</p>
            ))}
            <div ref={msgEndRef} />
        </div>
    </div>
  )
}

export default Jjangkemppo