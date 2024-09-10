"use client";

// "use client"; permet de dire que ce fichier est un fichier client et non serveur

import { useState } from "react";
// useState c'est pour le change de state comme React

import Button from "./button";
import { useRouter } from "next/navigation";
/*
    useRouter c'est pour la navigation entre les pages avec Next.js
    mais attention il s'agit de useRouter de next/navigation et non de next/router
    next/router est pour la navigation côté serveur
 */

export default function MyFisrtComponent() {
    const [count, setCount] = useState(0);
    const router = useRouter();

    function handleClick() {
        setCount(count + 1);
    }

    function handleRedirection() {
        router.push("/page1");
    }

    return (
        <>
            <ul className="flex flex-col gap-10">
                <li>Je</li>
                <li>Suis</li>
                <li>Un</li>
                <li>Composant</li>
                <li></li>
                <Button onClick={handleClick} name="Cliquez-moi" />
                <p>{count}</p>
                <Button onClick={handleRedirection} name="redirection" />
            </ul>
            <p>le bouton est lui aussi un composant !</p>
        </>
    );
}
