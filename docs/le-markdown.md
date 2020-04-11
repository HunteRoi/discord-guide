---
id: le-markdown
title: Le Markdown
---
import Image from '../src/components/Image';
import RocketList from '../src/components/RocketList';
import Code from '../src/components/Code.js';

Discord permet de mettre son texte en forme à l'aide de [la syntaxe Markdown](https://www.markdownguide.org/). 

:::note
Si tu veux en apprendre plus sur Discord, je t'invite à consulter [leurs tutoriels](https://support.discordapp.com/hc/fr/categories/115000217151).
:::

Tu trouveras ci-dessous un récapitulatif sous forme de tableau des différents symboles utilisables dans Discord afin de mettre en forme tes messages! 😉

| Format                                  	| Symbole         	| Exemple                                   	| Résultat                            	|
|-----------------------------------------	|-----------------	|-------------------------------------------	|-------------------------------------	|
| Italique                                	| \*              	| \*italique\*                              	| *italique*                          	|
| Gras                                    	| \*\*            	| \*\*gras\*\*                              	| **gras**                            	|
| Barré                                   	| \~\~            	| \~\~barré\~\~                             	| ~~barré~~                           	|
| Souligné                                	| \_\_            	| \_\_souligné\_\_                          	| <span className="underline">souligné</span>                        	|
| Spoiler                                 	| \|\|            	| <Image src="/img/spoiler.png" alt="Spoiler" />                          	| Fermé: <Image src="/img/spoiler-closed.png" alt="Closed Spoiler" /> Ouvert: <Image src="/img/spoiler-opened.png" alt="Opened Spoiler" />             	|
| Ligne de citation                       	| \>              	| \> citation                               	| <Image src="/img/inline-citation.png" alt="Inline Citation" />                          	|
| Ligne de code                           	| \`              	| <Image src="/img/code.png" alt="Inline Code" />	| <Image src="/img/code-result.png" alt="Inline Code" />	|
| Bloc de code                            	| \`\`\`          	| <Image src="/img/code-block.png" alt="Code Block" />	| <Image src="/img/code-block-result.png" alt="Code Block" />	|
| Bloc de code avec coloration syntaxique 	| \`\`\`&lt;langage&gt; 	| <Image src="/img/colored-code-block.png" alt="Code Block with Semantic Hightlight" />	| <Image src="/img/colored-code-block-result.png" alt="Code Block with Semantic Hightlight" />	|

Tu peux trouver une liste complète des langages supportés par Discord sur [highlightjs.org](https://highlightjs.org/static/demo/). Personnellement, j'utilise souvent ces deux "codes de langage" dans mes blocs de code :
<RocketList>
  <li><Code>csharp</Code> pour <span>C#</span></li>
  <li><Code>js</Code> ou <Code>javascript</Code> pour <span>JavaScript</span></li>
</RocketList>

:::tip 
Au fait! Tu peux combiner les différents symboles afin d'obtenir un texte avec plusieurs styles : ***texte gras italique***.
:::
