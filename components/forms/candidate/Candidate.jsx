import React from 'react'
const styles = {
    wrapper: `flex flex-col items-center justify-center h-screen`,
    inp: ` bg-transparent rounded-2xl px-2 py-1 border-0 border-b-2 border-gray-600`,
    container: `flex flex-col `,
    items: `flex flex-col items-center justify-center`


}
const Candidate = () => {
    return (
        <div className={styles.wrapper}>
            <form action="" method="post" className={styles.container}>
                <div className={styles.items}>
                    <label htmlFor="name">Name</label>
                    <input type="text" className={styles.inp} id="name" placeholder="Enter name" />
                </div>
                <div className={styles.items}>
                    <label htmlFor="email">Email</label>
                    <input type="email" className={styles.inp} id="email" placeholder="Enter email" />
                </div>
            </form>
        </div>
    )
}

export default Candidate