import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import DiscordCard from '../components/discord-card/';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const joinText = "Rejoindre";

  return (
    <Layout
      title='Accueil'
      description='DiscordGuide, pour aider à mieux comprendre Discord'
    >
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className='container'>
          <h1 className='hero__title'>{siteConfig.title}</h1>
          <p className='hero__subtitle'>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('docs/se-connecter-et-déconnecter')}
            >
              C'est parti !
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.serversAd}>
          <div>
            <h2>Qu'est-ce que c'est?</h2>
            <p>
              Tu retrouveras dans cette suite de pages de nombreuses anecdotes
              et informations qui, je l'espère, t'aideront à mieux comprendre
              l'application.
            </p>
            <h2>Ressources supplémentaires</h2>
            <p>
              Sache que si tu souhaites en apprendre plus, tu peux visiter
              plusieurs autres sites :
            </p>
            <ul>
              <li>
                <a href='https://discordia.me/en/home'>
                  Discordia (Discord Wiki)
                </a>
              </li>
              <li>
                <a href='https://discordapp.com/developers'>
                  Discord Developer Portal
                </a>
              </li>
              <li>
                <a href='https://blog.discordapp.com/'>Discord Blog</a>
              </li>
              <li>
                <a href='https://support.discordapp.com/hc/fr'>Support Discord</a>
              </li>
            </ul>
          </div>

          <p>
            Tu es un·e étudiant·e à l'IESN et l'une des sections ci-dessous te
            semble familière ? Rejoins tes pairs, réclame ton rôle et fais-toi
            une place au sein de la communauté!
          </p>
          <section className={styles.servers}>
            <DiscordCard
              inviteCode='62gF33E'
              introText='Serveur créé en Septembre 2017'
              joinText={joinText}
            />

            <DiscordCard
              inviteCode='TtqWDvp'
              introText='Serveur créé en Mars 2020'
              joinText={joinText}
            />
          </section>
        </section>
      </main>
    </Layout>
  );
}
