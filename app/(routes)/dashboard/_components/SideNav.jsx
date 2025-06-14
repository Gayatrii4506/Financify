import React, {useEffect} from "react";
import Image from "next/image";

import {
    LayoutGrid,
    PiggyBank,
    ReceiptText,
    ShieldCheck,
    CircleDollarSign
} from "lucide-react"

import { UserButton } from "@clerk/clerk-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

function SideNav() {
    const menuList =[
        {
            id:1,
            name: "Dashboard",
            icon:LayoutGrid,
            path: "/dashboard",
        },
        {
            id:2,
            name: "Income",
            icon:CircleDollarSign,
            path: "/dashboard/incomes",
        },
        {
            id:3,
            name: "Budgets",
            icon:PiggyBank,
            path: "/dashboard/budgets",
        },
        {
            id:4,
            name: "Expenses",
            icon:ReceiptText,
            path: "/dashboard/expenses",
        },
        {
            id:5,
            name: "Upgrade",
            icon:ShieldCheck,
            path: "/dashboard/upgrade",
        },
    ];
    const path = usePathname()

    useEffect(() => {
        console.log(path)
    }, [path]);

    return(
        <div className="h-screen p-5 border shadow-sm">
            <div className="flex flex-row items-center">
                <Image src={"./donut-chart.svg"} alt='logo' width={40} height={25}/>
                <span className='text-blue-800 font-bold text-xl'>Financify</span>
            </div>

            <div>
                {menuList.map((menuList, index)=>(
                    <Link
                    href={menuList.path} key={index}
                    >
                <h2 className="">

                </h2>

                    </Link>
                ))}
            </div>
        </div>
    )
}