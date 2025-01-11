'use client';
import CountUp from "react-countup";

export default function AnimatedCounter({amount} : {amount: number}) {

    return (
        <p>
            <CountUp
                className={'w-full'}
                decimal={'.'}
                decimals={2}
                prefix={'$'}
                end={amount}
                duration={1}
            />
        </p>
    );
}