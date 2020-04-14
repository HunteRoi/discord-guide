import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import styles from './styles.module.css';

const endpoint = 'https://discordapp.com/api/v6/invite/';
const countsQuery = '?with_counts=true';

export default function DiscordCard({ inviteCode, introText, joinText }) {
  const [loading, setLoading] = useState(true);
  const [guildName, setGuildName] = useState('');
  const [guildIcon, setGuildIcon] = useState('');
  const [guildTotalMembers, setGuildTotalMembers] = useState(0);
  const [guildOnlineMembers, setGuildOnlineMembers] = useState(0);
  const [guildInvite, setGuildInvite] = useState('');

  const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(new Error(response.statusText))
    }
  }
  const toJson = (response) => response.json();
  const setData = (data) => {
    setGuildName(data.guild.name);
    setGuildIcon(`https://cdn.discordapp.com/icons/${data.guild.id}/${data.guild.icon}.png`);
    setGuildTotalMembers(data.approximate_member_count);
    setGuildOnlineMembers(data.approximate_presence_count);
    setGuildInvite(`https://discordapp.com/invite/${inviteCode}`);

    setLoading(false);
  }
  const openInvite = () => window.open(guildInvite, "_blank");

  useEffect(() => {
    fetch(`${endpoint}${inviteCode}${countsQuery}`)
      .then(checkStatus)
      .then(toJson)
      .then(setData)
      .catch(console.warn);
  });

  return loading ? <><h1>Chargement en cours...</h1><br /></>
    : (
    <div className={styles.discordInvite}>
      {introText && <h5 className={styles.introText} className={classnames(styles.noselect)}>{introText}</h5> }
      <div className={styles.discordData}>
        <div onClick={openInvite} className={classnames(styles.serverImg, styles.discordLink)} style={{ background: "rgb(54, 57, 63) repeat scroll 50% 50% / 100% 100% padding-box padding-box", backgroundImage: `url("${guildIcon}")`}}></div>
        <div className={styles.discordInfo}>
          <div className={classnames(styles.serverNameBox, styles.discordLink)} onClick={openInvite}>
            <span className={classnames(styles.noselect, styles.serverName)}>{guildName}</span>
          </div>
          <div className={classnames(styles.status)}>
            <div className={classnames(styles.statusIndicators, styles.noselect)}>
              <i className={styles.onlineInd}></i> <span className={styles.numOnline}>{guildOnlineMembers} Online</span>
              <i className={styles.offlineInd}></i> <span className={styles.numTotal}>{guildTotalMembers} Members</span>
            </div>
          </div>
        </div>
        <button onClick={openInvite} type="button" className={classnames(styles.discordLink, styles.callToAction)}>
          <div className={classnames(styles.buttonText, styles.noselect)}>{joinText}</div>
        </button>
      </div>
    </div>)
};
