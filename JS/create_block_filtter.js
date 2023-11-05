let n = 7;
let corner = 7;

let result = "";

for (let i = -n; i <= n; i++) {
    for (let j = -n; j <= n; j++) {
        if ( Math.abs( i ) + Math.abs( j ) <= corner) {
            // console.log( i + " " + j );
            result += `execute as @a[scores={ice_apple_timer=..6000}] at @p run execute as @a at @s if block ~${j} ~-1 ~${i} minecraft:water run setblock ~${j} ~-1 ~${i} minecraft:packed_ice\n`;
        }
    }
}

console.log( result );