import laptop from "../../../../assets/mockups/laptop-frame.png";
import Dashboard from "./Dashboard";

export default function LaptopMockup() {
    return (

        <div className="relative w-[700px] h-[430px]">

            {/* Dashboard */}

            <div
    className="
    absolute
    top-[9px]
    left-[69px]
    w-[546px]
    h-[355px]
    overflow-hidden
    rounded-lg
    z-10
    "
>

                <Dashboard />

            </div>

            {/* Laptop */}

            <img
                src={laptop}
                alt="Laptop"
                className="relative z-20"
            />

        </div>

    );
}