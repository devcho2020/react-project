import { createContext, useContext, useState } from "react";
import dayjs from 'dayjs';

const CoinContext = createContext(null);

export const CoinProvider = ({ children }) => {

    const defaultCoinValue = 1000;
    const defaultCoinChargeChances = 3;
    const userDefaultInfo = {
        'coinLastChargedDate' : dayjs().format('YYYY-MM-DD'),
        'userCoin' : defaultCoinValue,
        'coinChargeChances' : defaultCoinChargeChances
    }
    let userInfo = localStorage.gameWordUserInfo ? JSON.parse(localStorage.gameWordUserInfo) : userDefaultInfo;
    userInfo.coinLastChargedDate = dayjs(userInfo.coinLastChargedDate).isValid() ? userInfo.coinLastChargedDate : dayjs().format('YYYY-MM-DD');
    userInfo.userCoin = isNaN(userInfo.userCoin) ? defaultCoinValue : parseInt(userInfo.userCoin);
    userInfo.coinChargeChances = isNaN(userInfo.coinChargeChances) ? defaultCoinChargeChances : parseInt(userInfo.coinChargeChances);

    if(userInfo.userCoin === 0 && dayjs().isAfter(userInfo.coinLastChargedDate, 'day')) {
        userInfo = userDefaultInfo;
    }
    
    localStorage.setItem('gameWordUserInfo', JSON.stringify(userInfo));

    // 코인 값
    const [coinValue, setCoinValue] = useState(userInfo.userCoin);
    const [coinChargeChances, setCoinChargeChances] = useState(userInfo.coinChargeChances);

    // localstorage 값 변경
    const updateUserInfoInStorage = (updates = {}) => {
        const current = JSON.parse(localStorage.getItem('gameWordUserInfo') || '{}');
        const updated = {
            ...current,
            ...updates,
        };
        localStorage.setItem('gameWordUserInfo', JSON.stringify(updated));
    };

    // 코인 추가
    const addCoin = (addCoinValue) => {
        addCoinValue = isNaN(addCoinValue) ? 0 : parseInt(addCoinValue);
        setCoinValue((prev) => {
            const updated = prev + addCoinValue;
            updateUserInfoInStorage({ userCoin: updated });
            return updated;
        });
    }

    // 코인 충전
    const coinCharge = () => {
        if(coinValue > 0) {
            alert('남은 코인 사용후 다시 시도해 주세요')
        } else if (coinChargeChances > 0 && confirm('코인을 충전 하시겠습니까?')) {
            setCoinValue(defaultCoinValue);
            setCoinChargeChances((prev) => prev -1);
            updateUserInfoInStorage({
                userCoin: defaultCoinValue,
                coinChargeChances: userInfo.coinChargeChances - 1
            });
        } else {
            alert('남은 충전 횟수가 없습니다.')
        }
    }

    const useCoin = (useCoinValue) => {
        useCoinValue = isNaN(useCoinValue) ? 0 : parseInt(useCoinValue);
        if(coinValue >= useCoinValue) {
            setCoinValue((prev) => {
                const updated = prev - useCoinValue;
                updateUserInfoInStorage({ userCoin: updated });
                return updated;
            });
            return true;
        } else {
            if(userInfo.coinChargeChances > 0) {
                coinCharge();
            } else {
                alert('코인 탕진!')
            }
            return false;
        }
    }

    return (
        <CoinContext.Provider value={{ coinValue, coinChargeChances, addCoin, useCoin, coinCharge}}>
            {children}
        </CoinContext.Provider>
    )
}

export const useCoinContext = () => useContext(CoinContext);