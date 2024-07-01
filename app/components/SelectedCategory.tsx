"use client"

import { Card, CardHeader } from "@/components/ui/card"
import { categoryItems } from "../lib/categoryItems"
import Image from "next/image"
import { useState } from "react"

export default function SelectCategory() { 

    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    return (
        <div className="grid grid-cols-2 gap-8 mt-10 w-3/5 mx-auto mb-48 lg:grid-cols-4">
            {
                categoryItems.map((item) => (
                    <div key={item.id} className="cursor-pointer">
                        <Card
                            className={selectedCategory === item.name ? "border-primary border-2" : ""}
                            onClick={() => setSelectedCategory(item.name)}
                        >
                            <CardHeader>
                                <Image
                                    src={item.imageUrl}
                                    alt={item.name}
                                    height={32}
                                    width={32}
                                    className="w-8 h-8"
                                ></Image>
                                <h3 className="font-medium">{item.title}</h3>
                            </CardHeader>
                        </Card>
                    </div>
                ) )
            }
        </div>
    )
}