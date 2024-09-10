import MyFisrtComponent from "@/components/myFirstComponent";

export default function Home() {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-10 pt-10">
            <h1 className="text-2xl font-bold">Melind&apos;app</h1>
            <MyFisrtComponent />
        </div>
    );
}
