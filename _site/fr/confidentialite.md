---
layout: 'layouts/article.njk'
title: Confidentialité — ECS Drive
permalink: /fr/confidentialite/
---

# Avis de confidentialité — ECS Drive

**Dernière mise à jour : 13 octobre 2026**

ECS Drive est une application OAuth privée utilisée pour connecter un outil personnel de sauvegarde à Google Drive. Elle n'est pas offerte comme service à d'autres personnes.

## Données utilisées

Lorsque vous autorisez l'application, Google lui transmet des jetons OAuth afin que l'outil de sauvegarde puisse accéder aux fichiers Google Drive créés ou ouverts par cette application, selon l'autorisation `drive.file`. L'application n'est pas conçue pour parcourir les autres fichiers de votre Drive.

L'outil est conçu pour chiffrer le dépôt de sauvegarde sur le serveur avant son transfert vers Google Drive. Google peut voir l'existence du dépôt chiffré, son volume, les moments de transfert et les données techniques nécessaires au fonctionnement de Drive; le contenu du dépôt reste chiffré par l'outil.

## Utilisation et stockage

Les jetons OAuth sont conservés dans la configuration protégée du serveur personnel qui exécute la sauvegarde. Les fichiers de sauvegarde sont stockés dans le compte Google Drive autorisé. Ils ne sont pas vendus ni partagés avec d'autres personnes. Google traite les données conformément à ses propres conditions et politiques de confidentialité.

## Conservation et révocation

Les sauvegardes sont conservées dans Google Drive jusqu'à leur suppression selon la politique de rétention configurée ou par le propriétaire du compte. Vous pouvez révoquer l'accès de l'application dans les [paramètres de sécurité de votre compte Google](https://myaccount.google.com/permissions). Après révocation, les nouvelles sauvegardes et restaurations via Drive ne fonctionneront plus. La suppression de l'autorisation ne supprime pas automatiquement les copies déjà stockées dans Drive.

## Contact

Pour toute question au sujet de cet avis ou de l'application, écrivez à [Raphaël Côté](mailto:cotlarrc@gmail.com).
