import React from "react";
import { Link } from 'react-router-dom';
import MoonPay from '../../../assets/images/logos/logo-full-black-n.svg'
import CoinBase from '../../../assets/images/logos/coinbase.svg'
import Bitpanda from '../../../assets/images/logos/bitpanda-fcb-acm-nfl-logos.gif'
import Binance from '../../../assets/images/logos/binance.png'
import Crypto from '../../../assets/images/logos/crypto-com-vector-logo.png'
import Kraken from '../../../assets/images/logos/kraken-logo@logotyp.us.svg'
import './ExchangeArea.css'
import Kucoin from '../../../assets/images/logos/kucoin.svg'
import Paybis from '../../../assets/images/logos/paybis-logo.webp'
import coinspot from '../../../assets/images/logos/Coinspot_logo-removebg-preview.webp'
import bybit from '../../../assets/images/logos/Bybit.png'
import gateio from '../../../assets/images/logos/getio.svg'
import bitget from '../../../assets/images/bitget.svg'
import Mercury from '../../../assets/images/logos/mercyryo_logo.svg'
import bitvao from '../../../assets/images/bitvao.svg'
const exchanges = [
    { name: "Moonpay", logo: MoonPay, link: "https://www.moonpay.com" },
    { name: "Coinbase", logo: CoinBase, link: "https://www.coinbase.com" },
    { name: "Bitpanda", logo: Bitpanda, link: "https://www.bitpanda.com" },
    { name: "Binance", logo: Binance, link: "https://www.binance.com" },
    { name: "Mercuryo", logo: Mercury, link: "https://www.mercuryo.io" },
    { name: "Crypto.com", logo: Crypto, link: "https://crypto.com" },
    { name: "Kraken", logo: Kraken, link: "https://www.kraken.com" },
    { name: "Bitvavo", logo: bitvao, link: "https://bitvavo.com" },
    { name: "Kucoin", logo: Kucoin, link: "https://www.kucoin.com" },
    { name: "Paypis", logo: Paybis, link: "https://paybis.com" },
    { name: "Coinspot", logo: coinspot, link: "https://www.coinspot.com.au" },
    { name: "Bybit", logo: bybit, link: "https://www.bybit.com" },
    { name: "Gate.io", logo: gateio, link: "https://www.gate.io" },
    { name: "Bitget", logo: bitget, link: "https://www.bitget.com" }
];

const ExchangeAreaa = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                {exchanges.map((exchange, index) => (
                    <div key={index} className="col-md-6 col-lg-4 mb-4">
                        <Link to={exchange.link} target="_blank" className="nasaaa" rel="noopener noreferrer">
                            <div className="card shadow-sm text-center p-4">
                                <img src={exchange.logo} alt={exchange.name} className="img-fluid" style={{ maxWidth: "200px", textAlign: 'center', margin: "auto" }} />
                                <h5 className="mt-3 hasa" >{exchange.name}</h5>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExchangeAreaa;
