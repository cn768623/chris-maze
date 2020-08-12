scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    info.changeScoreBy(-10)
    info.changeLifeBy(-1)
    music.powerDown.play()
    tiles.setTileAt(location, myTiles.transparency16)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    info.changeScoreBy(-20)
    info.changeLifeBy(-1)
    music.powerDown.play()
    tiles.setTileAt(location, myTiles.transparency16)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile4, function (sprite, location) {
    info.changeScoreBy(10)
    music.pewPew.play()
    tiles.setTileAt(location, myTiles.transparency16)
    Bow = 1
})
info.onCountdownEnd(function () {
    info.stopCountdown()
    game.splash("Game Over :(")
    music.wawawawaa.play()
    game.reset()
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile7, function (sprite, location) {
    info.changeScoreBy(20)
    music.baDing.play()
    tiles.setTileAt(location, myTiles.transparency16)
    Flowers = 1
})
info.onLifeZero(function () {
    info.stopCountdown()
    game.splash("Game Over :(")
    music.wawawawaa.play()
    game.reset()
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass2, function (sprite, location) {
    if (true && (ring == 1 && (Flowers == 1 && (Bow == 1 || Boomerang == 1)))) {
        game.over(true)
    } else {
        game.splash("Hmm, I must have forgotten something")
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    info.changeScoreBy(20)
    music.baDing.play()
    tiles.setTileAt(location, myTiles.transparency16)
    ring = 1
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile5, function (sprite, location) {
    info.changeScoreBy(10)
    music.magicWand.play()
    tiles.setTileAt(location, myTiles.transparency16)
    Boomerang = 1
})
let Flowers = 0
let Boomerang = 0
let Bow = 0
let ring = 0
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . f f f f . . . . . . . . . . . . . . . 
    . . . f f f 2 2 f f f . . . . . . . . . . . . . 
    . . f f f 2 2 2 2 f f f . . . . . . . . . . . . 
    . f f f e e e e e e f f f . . . . . . . . . . . 
    . f f e 2 2 2 2 2 2 e e f . . . . . . . . . . . 
    . f e 2 f f f f f f 2 e f . . . . . . . . . . . 
    . f f f f e e e e f f f f . . . . . . . . . . . 
    f f e f b f 4 4 f b f e f f . . . . . . . . . . 
    f e e 4 1 f d d f 1 4 e e f . . . . . . . . . . 
    . f f f f d d d d d e e f . . . . . . . . . . . 
    f d d d d f 4 4 4 e e f . . . . . . . . . . . . 
    f b b b b f 2 2 2 2 f 4 e . . . . . . . . . . . 
    f b b b b f 2 2 2 2 f d 4 . . . . . . . . . . . 
    . f c c f 4 5 5 4 4 f 4 4 . . . . . . . . . . . 
    . . f f f f f f f f . . . . . . . . . . . . . . 
    . . . . f f . . f f . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 35, 35)
scene.setBackgroundColor(9)
tiles.setTilemap(tiles.createTilemap(hex`100010000000000101010000000000010101010100010000010000010601000101060101000501000000010101010001010003090101010001010000000100010100010101000000010100010a010001000000010100010101010001010000010001000101000101010100000000010000010601010001010101050001010100010101010200010101010101010101000100070101000000000000000101010001060001010101000101010001010100000000010101010001010100000000000101010106040100000101010101000101080001000006010000010101010001010100010001000101000001060500000000000100000000000005010101010101010101`, img`
    . . . 2 2 2 . . . . . 2 2 2 2 . 
    . 2 . . 2 . . 2 . 2 . 2 2 . 2 2 
    . . 2 . . . 2 2 2 2 . 2 2 . . . 
    2 2 2 . 2 2 . . . 2 . 2 2 . 2 2 
    2 . . . 2 2 . 2 . 2 . 2 . . . 2 
    2 . 2 2 2 2 . 2 2 . . 2 . 2 . 2 
    2 . 2 . . 2 . . . . 2 . . 2 . 2 
    2 . 2 . . 2 . . 2 2 2 . 2 2 2 2 
    . . 2 2 2 2 2 2 2 . 2 . 2 . . 2 
    2 . . . . . . . 2 . 2 . 2 . . 2 
    2 2 2 . 2 2 2 . 2 2 2 . . . . 2 
    2 2 2 . 2 2 2 . . . . . 2 2 2 2 
    . . 2 . . 2 2 2 2 2 . 2 2 . . 2 
    . . . 2 . . 2 2 2 2 . 2 2 2 . 2 
    . 2 . 2 2 . . 2 . . . . . . . 2 
    . . . . . . . 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tileGrass1,sprites.castle.tileGrass2,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7], TileScale.Sixteen))
tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass1)
scene.cameraFollowSprite(mySprite)
game.splash("I can't believe those toughs hid my girlfriend's presents. I better collect them quickly so I won't be late for our date.  Maybe I should get a weapon or two in case I see them")
info.startCountdown(130)
info.setScore(0)
info.setLife(3)
ring = 0
Bow = 0
Boomerang = 0
Flowers = 0
