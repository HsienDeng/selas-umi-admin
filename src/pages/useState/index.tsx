import React, {useEffect, useState} from "react";
import { Link } from "umi";

export default function List() {
    const [list, setList] = useState(["step1", "step2", "step3", "step4"]);
    const [name, setName] = useState("learn umi");

    const delay = () =>
        new Promise((resolve) => {
            setTimeout(resolve, 1000);
        });

    const deleteItem = async (item: any) => {
        await delay();
        list.splice(
            list.findIndex((e) => e === item),
            1
        );
        setList([...list]);
    };

    useEffect(() => {
        console.log('name value change!');
    }, [name])

    useEffect(() => {
        console.log('page init');
    }, [])

    useEffect(() => {
        const timekey = setInterval(() => {
            console.log('每秒调用一次');
        }, 1000);
        return () => {
            // 清除
            clearInterval(timekey);
        };
    }, [])

    return (
        <div>
            <h1>{name}</h1>
            <button
                onClick={() => {
                    setName("Umi 入门教程");
                }}
            >
                Click Me!
            </button>
            <Link to="/">Go to index page</Link>
            <ul>
                {list.map((i) => (
                    <li key={i}>
                        <button
                            onClick={() => {
                                deleteItem(i);
                            }}
                        >
                            删除{i}{" "}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
