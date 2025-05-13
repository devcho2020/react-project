import React from 'react'
import { useState, useRef, useEffect } from 'react';
import { useCoinContext } from '../../context/CoinContext';
import { weightedRandomPick } from '../../utils/randomWithWeights';

const Jjangkemppo = () => {

  const rewardWeights = {
    1: 59,
    2: 25,
    4: 10,
    7: 5,
    25: 1
  }

  const { coinValue, addCoin, useCoin: minusCoin, coinChargeChances} = useCoinContext();
  const [resultMsg, setResultMsg] = useState('');
  const [reward, setReward] = useState(0);
  const [resultMessages, setResultMessages] = useState([]);
  const computerValues = ['바위', '보자기', '가위'];
  const possibleRewards = [1, 2, 4, 7, 2, 4, 1, 2, 7, 4, 2, 25];
  const messageEndRef = useRef(null);   // 스크롤 이동을 위해
    

  // 컴퓨터 값
  const getComputerValue = () => {
    return computerValues[Math.floor(Math.random() * computerValues.length)];
  }
  // 결과 확인
  const getCalculateResult = (myValue) => {
    const computerValue = getComputerValue();
    if(myValue === computerValue) {
        setResultMessages(prev => [...prev, '비겼다!']);
        return '비겼다!';
    }
    if((myValue === '가위' && computerValue === '바위')
        || (myValue === '바위' && computerValue === '보자기')
        || (myValue === '보자기' && computerValue === '가위')) {
            setResultMessages(prev => [...prev, '졌다 ㅠ']);
        return '졌다 ㅠ';
    } else {
        const currentResultReward = weightedRandomPick(rewardWeights);
        const currentRewardValue = 100 * currentResultReward;
        setReward(currentRewardValue);
        addCoin(currentRewardValue);
        setResultMessages(prev => [...prev, `이겼다! 보상: ${currentRewardValue}`]);
        return '이겼다!';
    }
  }

  // 사용자 선택 시 이벤트
  const handleUserSelection = (myValue) => {
    if(!minusCoin(100)) return;
    const resultMessage = getCalculateResult(computerValues[myValue]);
    setResultMsg(resultMessage);
  }

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [resultMessages]);
  
  return (
    <div>
      <div>

      </div>
        <div>보유 코인 : {coinValue} / 충전 횟수 : {coinChargeChances}</div>
        <div onClick={() => handleUserSelection(2)}>가위</div>
        <div onClick={() => handleUserSelection(1)}>보자기</div>
        <div onClick={() => handleUserSelection(0)}>바위</div>
        <div>결과 : {resultMsg}</div>
        <div>리워드 목록
          {possibleRewards.map((item, inddex) => (
            <span key={inddex}>{item}</span>
          ))}
        </div>
        <div>리워드 : {reward}</div>
        <div className='max-h-40 overflow-scroll'>
            {resultMessages.map((item, index) => (
                <p key={index}>{index + 1} 게임 결과 : {item}</p>
            ))}
            <div ref={messageEndRef} />
        </div>
    </div>
  )
}

export default Jjangkemppo