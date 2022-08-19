import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Header.module.scss';

const Header = ({ image, title, links }) => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.content_wrap}>
					<Image className={styles.logo} src={image.logo} alt={image.logoAlt} />
					<h1 className={styles.title}>{title}</h1>
					<div className={styles.cta_wrap}>
						<Link href={links.googleStore} passHref>
							<a target='_blank' rel='noopener noreferrer'>
								<Image src={image.gbadge} alt={image.gbadgeAlt} />
							</a>
						</Link>
						<Link href={links.appleStore} passHref>
							<a target='_blank' rel='noopener noreferrer'>
								<Image src={image.abadge} alt={image.abadgeAlt} />
							</a>
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
