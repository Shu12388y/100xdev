### Basic animtion

<motion.div

<!-- inital postion -->

inital={{
    x:0,
    y:0
}}

<!-- final position -->

animate={{
    x:1000,
    y:3000
}}

<!-- transitions -->

transition={{
durarion:2
delay:1

}}

>

</motion.div>

### Key frame animaiton

<motion.div
animate={{
x:[0,600,600,0,0]
y:[0,0,300,300,0]
}}>
</motion.div>
