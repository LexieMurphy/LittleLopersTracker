DROP DATABASE IF EXISTS lopersTracker_db;

CREATE DATABASE lopersTracker_db;

USE lopersTracker_db;

CREATE TABLE loperItems (
  id INT NOT NULL AUTO_INCREMENT,
  bowName VARCHAR(255) NULL,
  releaseDate VARCHAR(255) NULL,
  image_name VARCHAR(255) NULL,
  myStash BOOLEAN NULL,
  styleSize_Preemie BOOLEAN NULL,
  styleSize_Newborn BOOLEAN NULL,
  styleSize_Baby BOOLEAN NULL,
  styleSize_ToddlerKid BOOLEAN NULL,
  styleSize_Mommy BOOLEAN NULL,
  styleSize_BBNudeNylon BOOLEAN NULL,
  styleSize_BBBlackNylon BOOLEAN NULL,
  styleSize_BBClip BOOLEAN NULL,
  styleSize_SkinnyNudeNylon BOOLEAN NULL,
  styleSize_SkinnyBlackNylon BOOLEAN NULL,
  styleSize_LittleClip BOOLEAN NULL,
  styleSize_MiniWrapNewborn BOOLEAN NULL,
  styleSize_MiniWrapBaby BOOLEAN NULL,
  styleSize_MiniWrapToddlerKid BOOLEAN NULL,
  styleSize_MiniWrapMommy BOOLEAN NULL,
  PRIMARY KEY (id)
);