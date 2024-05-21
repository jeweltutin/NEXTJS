'use client'
import { useEffect } from "react";

function BootstarpClient () {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);
    return null;
}

export default BootstarpClient;