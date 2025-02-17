---
title: Gallery
description: "Add, delete, and use images"
---

# Gallery

Toutes les images téléchargées dans la galerie de Blog-Doc sont stockées dans le dossier « images » du répertoire « static ». Vous pouvez accéder à ces images en utilisant un chemin similaire à : `/static/images/my-image.extension`

## Ajouter des images

Pour ajouter des images à la galerie, cliquez sur le bouton « Parcourir » et sélectionnez une ou plusieurs images. Vous pouvez télécharger autant d'images que vous le souhaitez, mais sachez que **la taille totale du fichier de toutes les images téléchargées ne doit pas dépasser 15 Mo**.

Pourquoi est-ce important ? L'optimisation de vos images est essentielle pour garantir leur bonne performance sur le Web et améliorer l'expérience utilisateur. Pour l'optimisation des images, vous pouvez utiliser des outils en ligne gratuits tels que [Squoosh](https://squoosh.app/), [TinyPNG](https://tinypng.com/) et [Resizing.app](https://resizing.app/), entre autres.

Après avoir sélectionné vos images, cliquez sur le bouton « Télécharger » pour les ajouter à la galerie. Vous serez redirigé vers la galerie, où vos images seront disponibles.

## Supprimer des images

Pour supprimer une image de la galerie, cliquez d'abord sur le bouton « Supprimer » associé à l'image que vous souhaitez supprimer. Une fenêtre de confirmation apparaîtra, vous demandant de confirmer la suppression. Cliquez sur le bouton « Supprimer » dans la fenêtre pour supprimer définitivement l'image. Veuillez noter qu'une fois supprimée, l'image ne sera plus disponible dans la galerie et sera également supprimée de toutes les pages ou articles où elle était précédemment affichée.

## Utiliser des images

Vous pouvez incorporer des images de la galerie dans vos pages ou articles en utilisant les méthodes suivantes :

1. **Syntaxe Markdown** : intégrez des images en utilisant le format Markdown `![Titre de l'image](image-source "Texte alternatif de l'image")`. Par exemple :

```markdown
![Cèdre du Liban](/static/images/cedar-tree-of-Lebanon.jpg "Le puissant cèdre du Liban")
```

2. **Balise HTML `<img>`** : incluez des images à l'aide de la balise HTML `<img>`, comme vous le feriez dans un fichier HTML standard :

```html
<img title="Cèdre du Liban" src="/static/images/cedar-tree-of-Lebanon.jpg" alt="Le puissant cèdre du Liban" />
```

3. **Images externes** : vous pouvez également utiliser des images hébergées sur Internet. Par exemple :

- Markdown :
```markdown
![Cèdre du Liban](https://tinyurl.com/483s6hr2 "Le puissant cèdre du Liban")
```
- HTML :
```html
<img title="Cèdre du Liban" src="https://tinyurl.com/483s6hr2" alt="Le puissant cèdre du Liban" />
```

4. **Sélecteur d'images** : utilisez le bouton « Ajouter une image » disponible sur chaque page et article pour sélectionner et afficher une image en vedette pour la page ou l'article à partir de la galerie.
