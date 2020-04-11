---
id: les-mentions-dans-discord
title: Les mentions dans Discord
---
import Image from '../src/components/Image';

:::important DISCLAIMER
Le générique masculin est utilisé sans aucune discrimination et uniquement dans le but d'alléger le texte.
:::

Outre son incroyable capacité de formatage de texte empruntée à Markdown, l'une des caractéristiques très utile avec Discord, c'est que tu peux créer un hyper-lien vers pratiquement n'importe quoi. Étroitement liée avec la page de documentation sur les [identifiants](les-identifiants), la lecture de ce chapitre te permettra de comprendre comment fonctionne une petite partie de l'application. 

## Les canaux
Imagine que tu veux rediriger quelqu'un vers un canal spécifique mais que le serveur où tu te trouves comporte un énorme nombre de canaux. Pas facile de retrouver le canal sur base d'un simple nom. Discord a mis en place un système d'hyper-lien qui te permet, quand tu notes un message, de transformer le nom d'un canal en un hyper-lien.

Rien de plus simple : il suffit d'écrire `#` suivi du nom du canal. Tu peux même choisir un canal parmi ceux proposés dans la liste. 

<!--
<video autoPlay loop>
  <source src="https://i.gyazo.com/c06fe099c62757236b1482a077ded749.mp4" type="video/mp4"/>
</video>
-->
<Image src="/img/channel-mention.gif" alt="Channel mention GIF" />

## Les utilisateurs et les rôles
Pour créer un hyper-lien vers un utilisateur ou même un rôle, c'est une syntaxe identique qui est en place : un `@` suivi du nom de l'utilisateur/du rôle.

<!--
<video autoPlay loop>
  <source src="https://i.gyazo.com/46bff6f4cfcc3c2391260c3880d67c87.mp4" type="video/mp4"/>
</video>
-->
<Image src="/img/user-mention.gif" alt="User mention GIF" />

<!--
<video autoPlay loop>
  <source src="https://i.gyazo.com/1ee19b25472558b67b24417ba0a14c8b.mp4" type="video/mp4"/>
</video>
-->
<Image src="/img/role-mention.gif" alt="Role mention GIF" />

:::warning Attention!
Un hyper-lien vers un utilisateur ou un rôle se nomme "une mention" et envoie une notification à la ou aux personnes concernées. Utilise cela avec parcimonie!
:::

Discord possède également 2 rôles spéciaux : "here" et "everyone". Le premier permet de mentionner _tous les utilisateurs **en ligne**_ et ayant accès au canal écrit dans lequel tu l'envoies. Le second permet de mentionner _tous les utilisateurs_ qui ont accès au canal écrit.
