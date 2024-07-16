import React from 'react';
import { Link } from 'react-router-dom';
import Investment from './InvestmentPlan';

const InvestmentPlan = ({ InevestmentPlan }) => {
    return (
        <div className="investmentplan">
        <h3>{plan.name}</h3>
        <p>Return: {plan.returnPercentage}%</p>
        <p>Amount: ${plan.minAmount} - ${plan.maxAmount}</p>
        <p>Duration: ${plan.duration} hours</p>
        <Link to={`/register?plan=${plan.name}`}>Invest Now</Link>
        </div>
    );
};

export default InvestmentPlan;