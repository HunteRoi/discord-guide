---
id: les-embeds
title: Les intégrations
---
import Image from '../src/components/Image';
import RocketList from '../src/components/RocketList';
import Code from '../src/components/Code.js';

Tu l'as sans doute remarqué quand tu postes un lien sur Discord, ou alors quand tu envoies un message contenant une image mais l'entité `message` est composée d'[énormément de choses décrites dans la documentation](https://discordapp.com/developers/docs/resources/channel#message-object). Retenons de cette liste quelques éléments importants :

<RocketList>
  <li>un identifiant</li>
  <li>l'identifiant du canal dans lequel le message est posté</li>
  <li>l'auteur du message</li>
  <li>le contenu de ce message (chaîne de caractères ne pouvant excéder 2000 caractères)</li>
  <li>l'horodatage d'envoi du message</li>
  <li>des intégrations</li>
</RocketList>

## Une intégration, c'est quoi?
> Du verbe anglais "to embed" qui signifie "intégrer", un embed est une intégration visuelle sur un site web, une application, un IRC, etc. Tu l'utilises dans la vie de tous les jours quand, par exemple, tu partages un lien YouTube ou une page du journal de votre école sur Twitter, Facebook ou que sais-je!

Une intégration (un embed), c'est également une entité générée par Discord et qui permet de mettre en avant des ressources de manière plus interactive. En effet, lorsque tu postes un lien YouTube par exemple, une intégration est automatiquement créé afin de pouvoir jouer la vidéo YouTube *depuis l'application Discord* (sans ouvrir ton navigateur). Elle est _intégrée_ à Discord. Voici la page de la documentation officielle : https://discordapp.com/developers/docs/resources/channel#embed-object.

## Les limitations

:::note
Comme toute entité, une intégration est également soumise à des limites. Ces dernières [sont décrites dans la documentation en ligne](https://discordapp.com/developers/docs/resources/channel#embed-limits).
:::

Outre les limitations de contenu, Discord bloque l'utilisation de certains champs.

<Image src="https://images-ext-1.discordapp.net/external/7PBH4eRp1AItUJtYBvtDIbhZ7w9te_Z_aCTKOGN1BaI/https/i.imgur.com/5KeHUgW.png" alt="Protected embed's fields" />

Ces bloquages permettent ainsi à Discord de s'assurer le monopole sur la création de certaines intégrations spécifiques, par exemple celles comprenant des vidéos:

<Image src="https://cdn.discordapp.com/attachments/497053863707148302/497098013903159316/embed-properties2.png" alt="YouTube embedded in Discord" />

## La structure d'une intégration
Une intégration soit formée de beaucoup d'éléments. Il est donc important de comprendre sa structure JSON afin de comprendre à quel élément affiché correspond chaque paire clé-valeur.

<Image src="https://media.discordapp.net/attachments/497053863707148302/497098157839351808/embed-structure.png" alt="Embed Structure" />

Voici une image et sa légende, expliquant ainsi la structure visuelle d'une intégration Discord :

<Image src="https://media.discordapp.net/attachments/497053863707148302/497098326987243535/embed-full-structure.png" alt="Explained Embed Structure" />

<ol>
  <li>
    <span><Code>author</Code>, le champ "auteur" composé de:</span>
    <ul>
      <li><Code>name</Code>, le nom de l'auteur</li>
      <li><Code>url</Code>, l'URL à ouvrir en cas de clic</li>
      <li><Code>icon_url</Code>, l'URL de l'icône</li>
    </ul>
  </li>
  
  <li>
    <span><Code>thumbnail</Code>, le champ "image" affiché comme vignette en haut à droite composé de:</span>
    <ul>
      <li><Code>url</Code>, le lien vers cette image (automatiquement redimensionnée)</li>
    </ul>
  </li>

  <li>
    <span>deux champs étroitement liés:</span>
    <ul>
      <li><Code>title</Code>, le titre</li>
      <li><Code>url</Code>, l'URL à ouvrir en cas de clic sur le titre</li>
    </ul>
  </li>

  <li><Code>description</Code>, le contenu de l'intégration</li>

  <li>
    <span><Code>fields</Code>, le contenu le plus intéressants : les champs. Ils sont tous composés ainsi:</span>
    <ul>
      <li><Code>name</Code>, le nom du champ</li>
      <li><Code>value</Code>, le contenu du champ</li>
      <li><Code>inline</Code>, un booléen qui le contenu doit être aligné quand c'est possible (comme les champs 4 et 5)</li>
    </ul>
  </li>

  <li>
    <span><Code>image</Code>, le champ "image" affiché en dessous des champs de l'intégration et composé de:</span>
    <ul>
      <li><Code>url</Code>, le lien vers cette image (automatiquement redimensionnée)</li>
    </ul>
  </li>

  <li>
    <span>le bas de page étroitement liés à 2 paires:</span>
    <ul>
      <li>
        <span><Code>footer</Code>, le bas de page lui-même composé de:</span>
        <ul>
          <li><Code>icon_url</Code>, l'URL de l'icône</li>
          <li><Code>text</Code>, le texte affiché à droite de l'icône</li>
        </ul>
      </li>
      <li><Code>timestamp</Code>, l'horodatage en format ISO8601</li>
    </ul>
  </li>

  <li>le code couleur en base 16</li>
</ol>

:::tip
Si tu as ton code couleur en hexadécimal, je te conseille d'utiliser `parseInt` du langage JavaScript pour le mettre en base 10 avant de l'utiliser dans ton intégration.

```js
> parseInt("995b52", 16)
> 10050386
```

Tu peux également utiliser [Blargbot](https://blargbot.xyz) et [son système de sous-tag](https://blargbot.xyz/tags#base) afin de transformer votre nombre dans la base de votre choix :

<Image src="/img/base-math.png" alt="Blargbot's {base} subtag" />
:::
