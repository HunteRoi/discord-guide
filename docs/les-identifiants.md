---
id: les-identifiants
title: Les identifiants
---
import Image from '../src/components/Image';
import RocketList from '../src/components/RocketList';

:::note
Pour aller plus loin, il est important d'activer le **Mode Développeur** sur Discord. 

1. Aller dans les paramètres en cliquant sur le rouage en bas à gauche.
2. Naviguer vers la section Apparence.
3. Descendre dans les paramètres Avancés et cocher le Mode développeur.

<Image src="https://cdn.discordapp.com/attachments/497053573541134365/497086300935946251/mode-dev.gif" alt="Enable Dev Mode" />

Ces trois prochaines pages prendront en compte le fait que cette manipulation a été réalisée.
:::

Discord est construit autour de plusieurs entités :
<RocketList>
  <li>les utilisateurs</li>
  <li>les messages</li>
  <li>les rôles</li>
  <li>les canaux</li>
  <li>les catégories (qui sont un type de canaux spéciaux)</li>
  <li>les serveurs (appelés "guildes" dans la documentation de Discord)</li>
  <li>les emojis personnalisés</li>
  <li>les <a href="/docs/les-webhooks">webhooks</a></li>
</RocketList>

Chacune de ces entités est identifiée par un nombre unique appelé "[Snowflake](https://discordapp.com/developers/docs/reference#snowflakes)". Pour récupérer l'ID d'une entité, il faut en général faire un clic droit sur celle-ci et sélectionner "Copier l'id" (sur le client Discord).

Ces identifiants sont très utiles, étant donné qu'ils référencent des entités de manière unique. Ils permettent donc de réaliser des hyper-liens de manière globale à travers Discord (référencer un canal écrit d'une guilde dans une autre, taguer une personne dans un canal auquel elle n'a pas accès, etc.). Voici un tableau récapitulant comment trouver l'identifiant des différentes entités auxquelles j'ai pu faire face. Une colonne montre, pour chaque entité si cela est possible, la manière de transformer l'ID en un hyper-lien. Le contenu de ce tableau [est décrit dans la documentation en ligne](https://discordapp.com/developers/docs/reference#message-formatting).

| Entité             	| Comment récupérer son ID                                                                                                                                                                                                          	| Pattern                                                	| Résultat 	|
|--------------------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|--------------------------------------------------------	|----------	|
| Utilisateur        	| Faire un clique droit sur l'utilisateur dans la liste des membres (à droite) ou dans un canal écrit puis cliquer sur "Copier l'id"                                                                                                	| `<@ID>` ou `<@!ID>`                                    	| <Image src="/img/user-mention.png" alt="User Mention" />	|
| Message            	| Faire un clique droit sur le message puis cliquer sur "Copier l'id"                                                                                                                                                               	|                                                        	| 	|
| Rôle               	| Ouvrir la liste des rôles dans les paramètres du serveur, faire clique droit sur le rôle de la liste puis cliquer sur "Copier l'id"                                                                                               	| `<@&ID>`                                               	| <Image src="/img/role-mention.png" alt="Role Mention" />	|
| Canal    	| Faire un clique droit sur le canal puis cliquer sur "Copier l'id"                                                                                                                                                    	| `<#ID>`                                                	| <Image src="/img/channel-mention.png" alt="Channel Mention" />	|
| Catégorie    	| Faire un clique droit sur la catégorie puis cliquer sur "Copier l'id"                                                                                                                                                    	| `<#ID>`                                                	| <Image src="/img/category-mention.png" alt="Category Mention" />	|
| Guilde (serveur)   	| Faire un clique droit sur l'icône du serveur (à gauche, dans la liste des serveurs) puis cliquer sur "Copier l'id"                                                                                                                	|                                                        	| 	|
| Emoji personnalisé 	| Taper l'emoji dans un canal, préfixé du caractère `\\` (exemple: `\:trollface:`) puis l'envoyer dans le chat. Le parser de Discord fera ainsi apparaître non pas l'emoji mais son identifiant : `<:trollface:501010468433952770>` 	| `<:_:ID:>` ou `<a:_:ID:>` s'il s'agit d'un emoji animé 	| <Image src="/img/emoji-mention.png" alt="Emoji Mention" />	|
| Webhook            	| Il n'est possible de récupérer l'ID d'un webhook\* qu'à travers l'interface Discord elle-même (dans la liste des webhooks, qui se trouve dans les paramètres du serveur).                                                           	|                                                        	| 	|

Il est possible de créer un lien spécifique avec l'identifiants d'une guilde, d'un canal et d'un message : `https://discordapp.com/channels/GUILD_ID/CHANNEL_ID/MESSAGE_ID`. Ce lien permet ainsi de "sauter" sur le message référencé dans le canal de la guilde.
Très utile quand on veut retrouver des choses qui sont très haut dans une conversation.

<!--
<video autoPlay loop>
  <source src="https://i.gyazo.com/0e0608f4cc9a7488840c916f66469bbc.mp4" type="video/mp4"/>
</video>
-->
<Image src="/img/message-jump.gif" alt="Message Jump GIF" />

:::tip
Il est possible de créer rapidement un tel lien en cliquant sur le message et en appuyant sur "Copier le lien du message".
:::

\*Le lien d'un webhook correspondre au modèle suivant : `https://discordapp.com/api/webhooks/WEBHOOK_ID/WEBHOOK_TOKEN`. Plus d'infos à la page suivante! 😉