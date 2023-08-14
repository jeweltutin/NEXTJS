import styles from "@/app/styles/common.module.css"
const userList = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
    return (
        <div className={styles.container}>
            <h2>List of Users</h2>
            {
                data.map((user) => (
                    <>
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                    </>

                ))
            }
        </div>
    )
}

export default userList;


