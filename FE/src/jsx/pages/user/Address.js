import React, { useEffect, useState } from 'react';
import "./Address.css"

import LogoNew from '../../../assets/images/logo.png'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Dropdown, Spinner } from 'react-bootstrap';
import { useAuthUser } from 'react-auth-kit';
import { getIndivTicketApi, getTransactionsApi, updateMessageApi } from '../../../Api/Service';
import { toast } from 'react-toastify';

const Address = () => {

    let Navigate = useNavigate()
    const authUser = useAuthUser();
    const [Admin, setAdmin] = useState("");
    const [isLoading, setisLoading] = useState(true);
    const [coinAddresses, setCoinAddresses] = useState([]);
    const [userWallets, setUserWallets] = useState([]);

    const getAddress = async () => {
        try {
            setisLoading(true);

            // Fetch transactions
            const transactions = await getTransactionsApi();
            console.log('transactions: ', transactions);

            if (transactions.success && transactions.Transaction?.length > 0) {
                // Map through all users' transactions
                const userWallets = transactions.Transaction.map(transaction => ({
                    userId: transaction.user,  // Store user ID
                    coins: [
                        { coinName: "Bitcoin", tokenAddress: transaction.btcTokenAddress },
                        { coinName: "Ethereum", tokenAddress: transaction.ethTokenAddress },
                        { coinName: "USDT", tokenAddress: transaction.usdtTokenAddress },
                        ...(transaction.additionalCoins || []) // Include additional coins
                    ]
                }));

                console.log("Extracted User Wallets:", userWallets);
                setUserWallets(userWallets); // Store in state
            } else {
                toast.dismiss();
                toast.error("No transactions found.");
            }
        } catch (error) {
            toast.dismiss();
            toast.error("Failed to fetch transaction data.");
        } finally {
            setisLoading(false);
        }
    };


    useEffect(() => {
        if (authUser().user.role === "admin") {
            setAdmin(authUser().user);
            getAddress()
            return;
        } else if (authUser().user.role === "user") {
            Navigate("/dashboard");
            return;
        }
    }, []);




    return (
        <>
            {
                isLoading ? <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                    <Spinner animation="border" variant="primary" />
                    <div style={{ opacity: 0, position: "absolute", left: "-2000%" }}></div>
                </div> : <div>

                    <div className="wallet-grid">
                        {userWallets.map((user, index) => (
                            <div key={index} className="wallet-block">
                                <Link to={`/admin/users/${user.userId}/general`}><h2 style={{ textDecoration: "underline", color: "blue" }} className="user-id">User ID: {user.userId}</h2></Link>
                                <div className="coins-list">
                                    {user.coins.map((coin, i) => (
                                        <div key={i} className="coin-item">
                                            <h3 className="coin-name">{coin.coinName}</h3>
                                            <p className="coin-address">
                                                Address: {coin.tokenAddress || ""}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            }
        </>

    );
}

export default Address;
