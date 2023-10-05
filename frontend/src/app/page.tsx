import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<p>
					Store and update tasks on the <em>To Be Done With</em> App
				</p>
			</div>

			<div className={styles.center}>TO BE DONE WITH</div>

			<div className={styles.grid}>
				<a
					href="#"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2>
						Tasks <span>-&gt;</span>
					</h2>
					<p>View all Tasks</p>
				</a>

				<a
					href="#"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2>
						Tags <span>-&gt;</span>
					</h2>
					<p>View tasks by tags</p>
				</a>

				<a
					href="#"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2>
						Users<span>-&gt;</span>
					</h2>
					<p>View all users</p>
				</a>
			</div>
		</main>
	);
}
