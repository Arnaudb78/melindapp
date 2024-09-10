"use client";

import Button from "@/components/button";
import { useRouter } from "next/navigation";

export default function Page1() {
    const router = useRouter();
    function handleRedirection() {
        router.push("/");
    }
    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-10 pt-10">
            <h1 className="text-2xl font-bold">Melind&apos;app</h1>
            <p>Page 1</p>
            <Button onClick={handleRedirection} name="Retour" />
        </div>
    );
}
