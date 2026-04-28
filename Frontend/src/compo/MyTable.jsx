import { TableCaption, Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const MyTable = () => {

    const dispatch = useDispatch();
    const tableData= useSelector((state)=>(state.dataReducer.table))

    useEffect(()=>{
        console.log("heheheheh");
        
        console.log(tableData)
    },[tableData])

    // const tableData = [
    //     { time: "9:00",  action: "ramp down", value: "5%"  },
    //     { time: "9:30",  action: "ramp up",   value: "12%" },
    //     { time: "10:00", action: "ramp down", value: "8%"  },
    //     { time: "10:30", action: "ramp up",   value: "15%" },
    //     { time: "11:00", action: "ramp down", value: "5%"  },
    //     { time: "11:30", action: "ramp up",   value: "10%" },
    // ]

    return (
        <div className='card hover:border-[#34D399]/50 p-6 border rounded-2xl bg-[#111827] border-gray-800/80 shadow-lg w-160 '>

            <div className='mb-4'>
                <span className='font-medium tracking-widest uppercase text-[#aaa] text-sm'>
                    Command Log
                </span>
            </div>

            <Table>
                <TableCaption className=' text-xs tracking-widest uppercase text-[#444]    border-t border-[#1a1a1a] pt-3'>
                    24 hours command views
                </TableCaption>

                <TableHeader>
                    <TableRow className='border-[#222] hover:bg-transparent'>
                        <TableHead className='text-xs tracking-widest uppercase text-[#555] '>Time</TableHead>
                        <TableHead className='text-xs tracking-widest uppercase text-[#555] w-20'>Action</TableHead>
                        <TableHead className='text-xs tracking-widest uppercase text-[#555]  text-right'>Value</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {tableData.map((data, i) => {
                        const isDown = data.action === "ramp down"
                        return (
                            <TableRow
                                key={i}
                                className='border-[#1a1a1a] hover:bg-[#1a1a1a] transition-colors'
                            >
                                <TableCell className='font-medium text-sm text-[#34D399] [text-shadow:0_0_8px_rgba(52,211,153,0.5)] '>
                                    {data.time}
                                </TableCell>

                                <TableCell>
                                    <span
                                        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs  font-semibold tracking-wide border
                                            ${isDown
                                                ? 'bg-[rgba(255,0,200,0.12)] text-[#ff00c8] border-[rgba(255,0,200,0.3)]'
                                                : 'bg-[rgba(52,211,153,0.12)] text-[#34D399] border-[rgba(52,211,153,0.3)]'
                                            }`}
                                    >
                                        {isDown ? '▼' : '▲'} {isDown ? "ramp down" : "ramp up"}
                                    </span>
                                </TableCell>

                                <TableCell
                                    className={`font-bold text-sm text-right
                                        ${isDown ? 'text-[#ff4d4d]' : 'text-[#39ff6a]'}`}
                                >
                                    {isDown ? '-' : '+'}{data.value_mw}
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    )
}

export default MyTable