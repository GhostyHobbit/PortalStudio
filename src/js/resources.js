import { ImageSource, Sound, Resource, Loader } from 'excalibur'

const Resources = {
    // art
    Alchemist: new ImageSource('images/alchemistwolamp.png'),
    AlchemistLamp: new ImageSource('images/alchemistwlamp.png'),
    Letter: new ImageSource('images/letter.png'),
    SceneTransition: new ImageSource('images/sparklybar.png'),
    LevelOneScreenOne: new ImageSource('images/levelone/sceneone.png'),
    levelTwoPlaceholder: new ImageSource('images/leveltwo/level_2_placeholder.png'),
    Intro: new ImageSource('images/introscene.png'),
    Dialogue: new ImageSource('images/dialogue.png'),
    L1Door: new ImageSource('images/levelone/door.png'),
    LevelFour: new ImageSource('images/LevelfourGood.png'),
    Floor: new ImageSource('images/floorbar.png'),
    // music
    //MainThemeMusic: new Sound('sound/music/CLE_4_Main_Theme.mp3'),
    //LevelOneMusic: new Sound('sound/music/CLE_4_Level_1.mp3'),
    //LevelTwoMusic: new Sound('sound/music/CLE_4_level_2.mp3'),
    //LevelFourGoodEndingMusic: new Sound('sound/music/CLE_4_Level_4_good_ending.mp3'),
    //LevelFourBadEndingMusic: new Sound('sound/music/CLE_4_Level_4_Bad_ending.mp3'),
    // sfx
    //OpeningLetterSFX: new Sound('sound/sfx/opening_letter.mp3')
}
const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }