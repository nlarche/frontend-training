### Liste de personnes

PeopleList est un composant conteneur. Sa responsabilité est de récupérer la liste des personnes et de déléguer l'affichage de chaque personne au composant PeopleCard.

La liste de personnes affiche dans son titre la personne sélectionné.

**_Le composant conteneur peut avoir un état_**

### PeopleCard

PeopleCard est un composant d'affichage qui prend en entrée une props people et emet en sortie le nom de la personne sélectionnée.

**_Un composant simple ne devrait pas avoir d'état dépendant de ses inputs_**

### State vs Store

Les instances de state sont uniques pour un composant.

Vous pouvez partager la logique d'état entre les composants, mais le state sera différent et unique pour chaque composant.

Pour partager un state entre des composants, il faut utiliser un store

En React : Redux ou MobX
En Vue : Pinia (intégré)
