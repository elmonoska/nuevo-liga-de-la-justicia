/**
 * -------------------------------------------------------------------
 * Este archivo contiene todas las preguntas del examen
 * -------------------------------------------------------------------
 *  */ 

//temas de cada pregunta
const tema1 = `Verb to be - Articles. Read and complete with the correct option:`
const tema2 = `Verb to be - Negative and interrogative forms. Read and complete with the correct option:`
const tema3 = `Question words. Read and complete with the correct option:`
const tema4 = `Possessive pronouns. Read and complete with the correct option:`
const tema5 = `Possessive’s. Read and complete with the correct option:`
const tema6 = `Demonstrative pronouns. Read and complete with the correct option:`
const tema7 = `Prepositions. Look at the pictures and answer the questions:`
const tema8 = `Adjectives and adverbs. Read and complete correctly. (ex: loud = loudly):`
const tema9 = `Intensifiers. Complete with the correct answer:`
const tema10 = `Simple present. Complete with the correct answer:`
const tema11 = `Simple present. Select affirmative, negative or interrogative sentences:`
const tema12 = `Present tense. Complete with the correct answer:`
const tema13 = `Seasons of the year. Select the name of the season according to the picture:`
const tema14 = `There is / there are. Select affirmative, negative or interrogative sentences:`
const tema15 = `How much / how many / some / a lot of / many. Complete with the correct answer:`
const tema16 = `Can / can’t. Complete with the correct answer:`
const tema17 = `Integration. Complete with the correct answer:`
const tema18 = `Use the correct form:`
const tema19 = `Regular verbs. Read and select the correct form of the verb:`
const tema20 = `Irregular verbs. Read and select the correct form of the verb:`

//imagenes de temas
const imgTema1 = '../img/cuestionario/imagen tema 1.png'
const imgTema2 = '../img/cuestionario/imagen tema 2.png'
const imgTema3 = '../img/cuestionario/imagen tema 3.png'
const imgTema4 = '../img/cuestionario/imagen tema 4.png'
const imgTema5 = '../img/cuestionario/imagen tema 5.png'
const imgTema6 = '../img/cuestionario/imagen tema 6.png'
const imgTema7_1 = '../img/cuestionario/imagen tema 7_1.png'
const imgTema7_2 = '../img/cuestionario/imagen tema 7_2.png'
const imgTema7_3 = '../img/cuestionario/imagen tema 7_3.png'
const imgTema8 = '../img/cuestionario/imagen tema 8.png'
const imgTema9 = '../img/cuestionario/imagen tema 9.png'
const imgTema10 = '../img/cuestionario/imagen tema 10.png'
const imgTema11 = '../img/cuestionario/imagen tema 11.png'
const imgTema12 = '../img/cuestionario/imagen tema 12.png'
const imgTema13_1 = '../img/cuestionario/imagen tema 13_1.png'
const imgTema13_2 = '../img/cuestionario/imagen tema 13_2.png'
const imgTema13_3 = '../img/cuestionario/imagen tema 13_3.png'
const imgTema13_4 = '../img/cuestionario/imagen tema 13_4.png'
const imgTema14 = '../img/cuestionario/imagen tema 14.png'
const imgTema15 = '../img/cuestionario/imagen tema 15.png'
const imgTema16 = '../img/cuestionario/imagen tema 16.png'
const imgTema17 = '../img/cuestionario/imagen tema 17.png'
const imgTema18 = '../img/cuestionario/imagen tema 18.png'
const imgTema19 = '../img/cuestionario/imagen tema 19.png'
const imgTema20 = '../img/cuestionario/imagen tema 20.png'



//preguntas
export const examenFinal = [
    //Preguntas del tema 1
    {
        pregunta: `${tema1} I _ _ English student.`,
        opciones: [
            `am, a`,
            `am, an`,
            `are, a`,
            `are, an`,
        ],
        respuesta: `am, an`,
        img: `${imgTema1}`,
    },
    {
        pregunta: `${tema1} She _ _ Super Hero fan.`,
        opciones: [
            `am, a`,
            `am, an`,
            `is, a`,
            `is, an`,
        ],
        respuesta: `is, a`,
        img: `${imgTema1}`,
    },
    {
        pregunta: `${tema1} _ you happy?`,
        opciones: [
            `Are`,
            `Am`,
            `Is`,
        ],
        respuesta: `Are`,
        img: `${imgTema1}`,
    },
    {
        pregunta: `${tema1} Green Lantern _ not a villain.`,
        opciones: [
            `am`,
            `are`,
            `is`,
        ],
        respuesta: `is`,
        img: `${imgTema1}`,
    },
    {
        pregunta: `${tema1} My father and I _ football fans."`,
        opciones: [
            `am`,
            `are`,
            `is`,
        ],
        respuesta: `are`,
        img: `${imgTema1}`,
    },
    {
        pregunta: `${tema1} _ Wonder Woman _ Amazon princess?`,
        opciones: [
            `is, a`,
            `is, an`,
            `are, a`,
            `are, an`,
        ],
        respuesta: `is, an`,
        img: `${imgTema1}`,
    },
    {
        pregunta: `${tema1} Today _ _ fantastic day!`,
        opciones: [
            `is, a`,
            `is, an`,
            `are, a`,
            `are, an`,
        ],
        respuesta: `is, a`,
        img: `${imgTema1}`,
    },

    //Preguntas del tema 2
    {
        pregunta: `${tema2} Wonder Woman _ a doctor, she _ a Super Hero.`,
        opciones: [
            `is not, are`,
            `is not, is`,
            `are not, are`,
            `are not, is`,
        ],
        respuesta: `is not, is`,
        img: `${imgTema2}`,
    },
    {
        pregunta: `${tema2} _ you _ artist or a musician?`,
        opciones: [
            `Am, a`,
            `Am, an`,
            `Are, a`,
            `Are, an`,
        ],
        respuesta: `Are, an`,
        img: `${imgTema2}`,
    },
    {
        pregunta: `${tema2} They _ friends, but they are nice.`,
        opciones: [
            `isn't`,
            `aren't`,
            `not`,
        ],
        respuesta: `aren't`,
        img: `${imgTema2}`,
    },
    {
        pregunta: `${tema2} It _ hot today, I am so happy!`,
        opciones: [
            `isn't`,
            `aren't`,
            `not`,
        ],
        respuesta: `isn't`,
        img: `${imgTema2}`,
    },
    {
        pregunta: `${tema2} I _ a zombie.`,
        opciones: [
            `am not`,
            `are not`,
            `is not`,
        ],
        respuesta: `am not`,
        img: `${imgTema2}`,
    },
    {
        pregunta: `${tema2} _ they wizards? No, they _.`,
        opciones: [
            `Am, isn't`,
            `Are, isn't`,
            `Are aren't`,
            `Is, isn't`,
        ],
        respuesta: `Are, aren't`,
        img: `${imgTema2}`,
    },
    {
        pregunta: `${tema2} _ the Joker a Super Hero? No, he _.`,
        opciones: [
            `Are, isn't`,
            `Are aren't`,
            `Is, isn't`,
            `Is, aren't`,
        ],
        respuesta: `Is, isn't`,
        img: `${imgTema2}`,
    },

    //Preguntas del tema 3
    {
        pregunta: `${tema3} _ is Canada?`,
        opciones: [
            `Who`,
            `Where`,
            `What`,
            `How`,
        ],
        respuesta: `Where`,
        img: `${imgTema3}`,
    },
    {
        pregunta: `${tema3} _ is the interview.`,
        opciones: [
            `Who`,
            `Where`,
            `When`,
            `What`,
        ],
        respuesta: `When`,
        img: `${imgTema3}`,
    },
    {
        pregunta: `${tema3} _ is the new Math teacher?`,
        opciones: [
            `Who`,
            `Where`,
            `What`,
            `How`,
        ],
        respuesta: `Who`,
        img: `${imgTema3}`,
    },
    {
        pregunta: `${tema3} _ time is it?`,
        opciones: [
            `Who`,
            `Where`,
            `What`,
            `How`,
        ],
        respuesta: `What`,
        img: `${imgTema3}`,
    },
    {
        pregunta: `${tema3} _ is she from? She is from Italy.`,
        opciones: [
            `Where`,
            `When`,
            `What`,
            `How`,
        ],
        respuesta: `Where`,
        img: `${imgTema3}`,
    },
    {
        pregunta: `${tema3} _ old are you? I am 12 years old.`,
        opciones: [
            `When`,
            `Why`,
            `What`,
            `How`,
        ],
        respuesta: `How`,
        img: `${imgTema3}`,
    },

    //Preguntas del tema 4
    {
        pregunta: `${tema4} Batman is friend of Superman. Is _ friend.`,
        opciones: [
            `her`,
            `his`,
            `its`,
        ],
        respuesta: `his`,
        img: `${imgTema4}`,
    },
    {
        pregunta: `${tema4} _ name is Wonder Woman.`,
        opciones: [
            `His`,
            `Its`,
            `Her`,
        ],
        respuesta: `Her`,
        img: `${imgTema4}`,
    },
    {
        pregunta: `${tema4} The Flash and you are friends. He is _ friend.`,
        opciones: [
            `its`,
            `your`,
            `his`,
        ],
        respuesta: `your`,
        img: `${imgTema4}`,
    },
    {
        pregunta: `${tema4} This little house is for my dog. Is _ house.`,
        opciones: [
            `its`,
            `his`,
            `her`,
        ],
        respuesta: `its`,
        img: `${imgTema4}`,
    },
    {
        pregunta: `${tema4} We are humans, The Earth is _ planet.`,
        opciones: [
            `its`,
            `our`,
            `his`,
        ],
        respuesta: `our`,
        img: `${imgTema4}`,
    },
    {
        pregunta: `${tema4} My name is Lucy and she is _ mom. My mom's name is Anne.`,
        opciones: [
            `their`,
            `my`,
            `its`,
        ],
        respuesta: `my`,
        img: `${imgTema4}`,
    },
    {
        pregunta: `${tema4} They are Super Heroes, _ identity is a mistery.`,
        opciones: [
            `my`,
            `our`,
            `their`,
        ],
        respuesta: `their`,
        img: `${imgTema4}`,
    },

    /**
     * **********FALTAN RESPUESTAS ********** 
     * * **********FALTAN RESPUESTAS ********** 
     * * **********FALTAN RESPUESTAS ********** 
     * * **********FALTAN RESPUESTAS ********** 
     * * **********FALTAN RESPUESTAS ********** 
     **/
    //Preguntas del tema 5
    {
        pregunta: `${tema5} My Super Hero _ suit.`,
        opciones: [
            `s'`,
            `'s`,
        ],
        respuesta: ``,
        img: `${imgTema5}`,
    },
    {
        pregunta: `${tema5} Their enemie _ powers.`,
        opciones: [
            `s'`,
            `'s`,
        ],
        respuesta: ``,
        img: `${imgTema5}`,
    },
    {
        pregunta: `${tema5} Your mother _ house.`,
        opciones: [
            `s'`,
            `'s`,
        ],
        respuesta: ``,
        img: `${imgTema5}`,
    },

    //Preguntas del tema 6
    {
        pregunta: `${tema6} _ car is red and comfortable.`,
        opciones: [
            `This`,
            `These`,
        ],
        respuesta: `This`,
        img: ``,
    },
    {
        pregunta: `${tema6} _ flowers are beautiful.`,
        opciones: [
            `That`,
            `Those`,
        ],
        respuesta: `That`,
        img: ``,
    },
    {
        pregunta: `${tema6} Are _ books for me?`,
        opciones: [
            `this`,
            `these`,
        ],
        respuesta: `these`,
        img: ``,
    },
    {
        pregunta: `${tema6} Is _ you new house?`,
        opciones: [
            `that`,
            `those`,
        ],
        respuesta: `that`,
        img: ``,
    },

    //Preguntas del tema 7
    {
        pregunta: `${tema7} Where is the apple?`,
        opciones: [
            `under`,
            `on`,
            `next to`,
        ],
        respuesta: `on`,
        img: `${imgTema7_1}`,
    },
    {
        pregunta: `${tema7} Where is the cat?`,
        opciones: [
            `between`,
            `under`,
            `in front of`,
        ],
        respuesta: `between`,
        img: `${imgTema7_2}`,
    },
    {
        pregunta: `${tema7} Where are my shoes?`,
        opciones: [
            `on`,
            `next to`,
            `under`,
        ],
        respuesta: `under`,
        img: `${imgTema7_3}`,
    },

    /**
     * **********FALTAN RESPUESTAS ********** 
     * * **********FALTAN RESPUESTAS ********** 
     * * **********FALTAN RESPUESTAS ********** 
     * * **********FALTAN RESPUESTAS ********** 
     * * **********FALTAN RESPUESTAS ********** 
     **/
    //Preguntas del tema 8
    {
        pregunta: `${tema8} The tiger is _. It attacks _. (aggresive)`,
        opciones: [
            ``,
            ``,
            ``,
            ``,
        ],
        respuesta: ``,
        img: `${imgTema8}`,
    },
    {
        pregunta: `${tema8} The Flash is a _ Super Hero. He runs _. (fast)`,
        opciones: [
            ``,
            ``,
            ``,
            ``,
        ],
        respuesta: ``,
        img: `${imgTema8}`,
    },
    {
        pregunta: `${tema8} The students are _. They study the lesson _. (quiet)`,
        opciones: [
            ``,
            ``,
            ``,
            ``,
        ],
        respuesta: ``,
        img: `${imgTema8}`,
    },

    /**
     * **********FALTAN RESPUESTAS ********** 
     * * **********FALTAN RESPUESTAS ********** 
     * * **********FALTAN RESPUESTAS ********** 
     * * **********FALTAN RESPUESTAS ********** 
     * * **********FALTAN RESPUESTAS ********** 
     **/
    //Preguntas del tema 9
    {
        pregunta: `${tema9} Those horses are _ fast! (too/enough)`,
        opciones: [
            ``,
            ``,
            ``,
            ``,
        ],
        respuesta: ``,
        img: `${imgTema9}`,
    },
    {
        pregunta: `${tema9} That's _ information, thank you. (enough/so)`,
        opciones: [
            ``,
            ``,
            ``,
            ``,
        ],
        respuesta: ``,
        img: `${imgTema9}`,
    },
    {
        pregunta: `${tema9} My mom is a _ good singer. (very/enough)`,
        opciones: [
            ``,
            ``,
            ``,
            ``,
        ],
        respuesta: ``,
        img: `${imgTema9}`,
    },

    //Preguntas del tema 10
    {
        pregunta: `${tema10} We _ (like/likes) comics, they are fun!`,
        opciones: [
            `like`,
            `likes`,
        ],
        respuesta: `like`,
        img: `${imgTema10}`,
    },
    {
        pregunta: `${tema10} Super Heroes _ (protect/protects) the planet.`,
        opciones: [
            `protect`,
            `protects`,
        ],
        respuesta: `protect`,
        img: `${imgTema10}`,
    },
    {
        pregunta: `${tema10} Wonder Woman _ (help/helps) humans against evildoers.`,
        opciones: [
            `help`,
            `helps`,
        ],
        respuesta: `helps`,
        img: `${imgTema10}`,
    },
    {
        pregunta: `${tema10} She _ (flight/flights) with her lasso of Truth.`,
        opciones: [
            `flight`,
            `flights`,
        ],
        respuesta: `flights`,
        img: `${imgTema10}`,
    },
    {
        pregunta: `${tema10} They _ (need/needs) super powers to save humanity from Solomon Grundy and Gorilla Grodd.`,
        opciones: [
            `need`,
            `needs`,
        ],
        respuesta: `needs`,
        img: `${imgTema10}`,
    },

    //Preguntas del tema 11
    {
        pregunta: `${tema11} SELECT NEGATIVE My friends read comic books.`,
        opciones: [
            `My friends don't read comic books.`,
            `My friends desn't read comic books.`,
        ],
        respuesta: `My friends don't read comic books.`,
        img: `${imgTema11}`,
    },
    {
        pregunta: `${tema11} SELECT INTERROGATIVE My friends read comic books.`,
        opciones: [
            `Do my friends read comic books?`,
            `Does my friends read comic books?`,
        ],
        respuesta: `Does my friends read comic books?`,
        img: `${imgTema11}`,
    },
    {
        pregunta: `${tema11} SELECT NEGATIVE She watches TV on weekends.`,
        opciones: [
            `She doesn't watches TV on weekends`,
            `She doesn't watch TV on weekends`,
            `She don't watches TV on weekends`,
            `She don't watch TV on weekends`,
        ],
        respuesta: `She doesn't watch TV on weekends`,
        img: `${imgTema11}`,
    },
    {
        pregunta: `${tema11} SELECT INTERROGATIVE She watches TV on weekends.`,
        opciones: [
            `Does she watches TV on weekends?`,
            `Does she watch TV on weekends?`,
            `Do she watches TV on weekends?`,
            `Do she watch TV on weekends?`,
        ],
        respuesta: `Does she watch TV on weekends?`,
        img: `${imgTema11}`,
    },
    {
        pregunta: `${tema11} SELECT AFFIRMATIVE Does my sister like French fries?`,
        opciones: [
            `My sister like French fries.`,
            `My sister likes French fries.`,
        ],
        respuesta: `My sister likes French fries.`,
        img: `${imgTema11}`,
    },
    {
        pregunta: `${tema11} SELECT NEGATIVE Does my sister like French fries?`,
        opciones: [
            `My sister don't like French fries.`,
            `My sister don't likes French fries.`,
            `My sister doesn't like French fries.`,
            `My sister doesn't likes French fries.`,
        ],
        respuesta: `My sister doesn't like French fries.`,
        img: `${imgTema11}`,
    },
    {
        pregunta: `${tema11} SELECT AFFIRMATIVE The boy doesn't jump the rope.`,
        opciones: [
            `The boy jump the rope.`,
            `The boy jumps the rope.`,
        ],
        respuesta: `The boy jumps the rope.`,
        img: `${imgTema11}`,
    },
    {
        pregunta: `${tema11} SELECT INTERROGATIVE The boy doesn't jump the rope.`,
        opciones: [
            `Does the boy jump the rope?`,
            `Does the boy jumps the rope?`,
            `Do the boy jump the rope?`,
            `Do the boy jumps the rope?`,
        ],
        respuesta: `Does the boy jump the rope?`,
        img: `${imgTema11}`,
    },

    //Preguntas del tema 12
    {
        pregunta: `${tema12} Pauline and Bruce _ (work/works) at a bank.`,
        opciones: [
            `work`,
            `works`,
        ],
        respuesta: `work`,
        img: `${imgTema12}`,
    },
    {
        pregunta: `${tema12} They _ (is/are) siblings.`,
        opciones: [
            `is`,
            `are`,
        ],
        respuesta: `are`,
        img: `${imgTema12}`,
    },
    {
        pregunta: `${tema12} She _ (are/is) the manager and he _ (is/are) a clrek.`,
        opciones: [
            `are, is`,
            `are, are`,
            `is, are`,
            `is, is`,
        ],
        respuesta: `is, is`,
        img: `${imgTema12}`,
    },
    {
        pregunta: `${tema12} They _ (start/starts) work very early in the morning and _ (finish/finishes) work late in the afternoon.`,
        opciones: [
            `start, finish`,
            `start, finishes`,
            `starts, finish`,
            `starts, finishes`,
        ],
        respuesta: `start, finish`,
        img: `${imgTema12}`,
    },
    {
        pregunta: `${tema12} They _ (live/lives) close to the bank and their house _ (is/are) next to the park, so they _ (drive/drives) to work.`,
        opciones: [
            `live, is, drive`,
            `live, are, drives`,
            `lives, is, drives`,
            `lives, are, drive`,,
        ],
        respuesta: `live, is, drive`,
        img: `${imgTema12}`,
    },
    {
        pregunta: `${tema12} Also they _ (like/likes) _ (his/her) jobs.`,
        opciones: [
            `like, their`,
            `like, his`,
            `likes, his`,
            `likes, their`,
        ],
        respuesta: `like, their`,
        img: `${imgTema12}`,
    },
    {
        pregunta: `${tema12} On weekends, Pauline and _ (his/her) friends ride _ (its/their) bikes.`,
        opciones: [
            `his, its`,
            `his, their`,
            `her, its`,
            `her, their`,
        ],
        respuesta: `her, their`,
        img: `${imgTema12}`,
    },
    {
        pregunta: `${tema12} Bruce and _ (her/his) father _ (go/goes) to the cinema on Sundays`,
        opciones: [
            `her, go`,
            `her, goes`,
            `his, go`,
            `his, goes`,
        ],
        respuesta: `his, go`,
        img: `${imgTema12}`,
    },

    //Preguntas del tema 13
    {
        pregunta: `${tema13}`,
        opciones: [
            `winter`,
            `summer`,
            `spring`,
            `autumn/fall`,
        ],
        respuesta: `winter`,
        img: `${imgTema13_1}`,
    },
    {
        pregunta: `${tema13}`,
        opciones: [
            `winter`,
            `summer`,
            `spring`,
            `autumn/fall`,
        ],
        respuesta: `summer`,
        img: `${imgTema13_2}`,
    },
    {
        pregunta: `${tema13}`,
        opciones: [
            `winter`,
            `summer`,
            `spring`,
            `autumn/fall`,
        ],
        respuesta: `spring`,
        img: `${imgTema13_3}`,
    },
    {
        pregunta: `${tema13}`,
        opciones: [
            `winter`,
            `summer`,
            `spring`,
            `autumn/fall`,
        ],
        respuesta: `autumn/fall`,
        img: `${imgTema13_4}`,
    },

    //Preguntas del tema 14
    {
        pregunta: `${tema14} SELECT AFFIRMATIVE _ _ a Chinese girl in my class.`,
        opciones: [
            `there is`,
            `there are`,
        ],
        respuesta: `there is`,
        img: `${imgTema14}`,
    },
    {
        pregunta: `${tema14} SELECT NEGATIVE  _ _ a Chinese girl in my class.`,
        opciones: [
            `there isn't`,
            `there aren't`,
        ],
        respuesta: `there isn't`,
        img: `${imgTema14}`,
    },
    {
        pregunta: `${tema14} SELECT INTERROGATIVE  _ _ a Chinese girl in my class?`,
        opciones: [
            `Are there`,
            `Is there`,
        ],
        respuesta: `Is there`,
        img: `${imgTema14}`,
    },
    {
        pregunta: `${tema14} SELECT AFFIRMATIVE _ _ a pencil on my desk.`,
        opciones: [
            `there is`,
            `there are`,
        ],
        respuesta: `there is`,
        img: `${imgTema14}`,
    },
    {
        pregunta: `${tema14} SELECT NEGATIVE  _ _ a pencil on my desk.`,
        opciones: [
            `there isn't`,
            `there aren't`,
        ],
        respuesta: `there isn't`,
        img: `${imgTema14}`,
    },
    {
        pregunta: `${tema14} SELECT INTERROGATIVE  _ _ a pencil on my desk?`,
        opciones: [
            `Are there`,
            `Is there`,
        ],
        respuesta: `Is there`,
        img: `${imgTema14}`,
    },
    {
        pregunta: `${tema14} SELECT AFFIRMATIVE _ _ four boys in the park.`,
        opciones: [
            `there is`,
            `there are`,
        ],
        respuesta: `there are`,
        img: `${imgTema14}`,
    },
    {
        pregunta: `${tema14} SELECT NEGATIVE  _ _ four boys in the park.`,
        opciones: [
            `there isn't`,
            `there aren't`,
        ],
        respuesta: `there aren't`,
        img: `${imgTema14}`,
    },
    {
        pregunta: `${tema14} SELECT INTERROGATIVE  _ _ four boys in the park?`,
        opciones: [
            `Are there`,
            `Is there`,
        ],
        respuesta: `Are there`,
        img: `${imgTema14}`,
    },
    {
        pregunta: `${tema14} SELECT AFFIRMATIVE _ _ a panda in the zoo.`,
        opciones: [
            `there is`,
            `there are`,
        ],
        respuesta: `there is`,
        img: `${imgTema14}`,
    },
    {
        pregunta: `${tema14} SELECT NEGATIVE  _ _ a panda in the zoo.`,
        opciones: [
            `there isn't`,
            `there isn't`,
        ],
        respuesta: `there aren't`,
        img: `${imgTema14}`,
    },
    {
        pregunta: `${tema14} SELECT INTERROGATIVE  _ _ a panda in the zoo?`,
        opciones: [
            `Are there`,
            `Is there`,
        ],
        respuesta: `Is there`,
        img: `${imgTema14}`,
    },

    /**
     * **********FALTAN RESPUESTAS ********** 
     * * **********FALTAN RESPUESTAS ********** 
     * * **********FALTAN RESPUESTAS ********** 
     * * **********FALTAN RESPUESTAS ********** 
     * * **********FALTAN RESPUESTAS ********** 
     **/    
    //Preguntas del tema 15
    {
        pregunta: `${tema15} How _ (much/many) glasses of soda does your father drink?`,
        opciones: [
            `much`,
            `many`,
        ],
        respuesta: ``,
        img: `${imgTema15}`,
    },
    {
        pregunta: `${tema15} I read _ (much/many) poems.`,
        opciones: [
            `much`,
            `many`,
        ],
        respuesta: ``,
        img: `${imgTema15}`,
    },
    {
        pregunta: `${tema15} How _ (many/mucho) apples do you eat a week?`,
        opciones: [
            `much`,
            `many`,
        ],
        respuesta: ``,
        img: `${imgTema15}`,
    },
    {
        pregunta: `${tema15} They eat _ (many/lots) green grapes.`,
        opciones: [
            `many`,
            `lots`,
        ],
        respuesta: ``,
        img: `${imgTema15}`,
    },
    {
        pregunta: `${tema15} How _ (much/many) juice do you drink?`,
        opciones: [
            `much`,
            `many`,
        ],
        respuesta: ``,
        img: `${imgTema15}`,
    },
    {
        pregunta: `${tema15} There are _ (much/a lot of) beautiful flowers in my garden.`,
        opciones: [
            `much`,
            `a lot of`,
        ],
        respuesta: ``,
        img: `${imgTema15}`,
    },
    {
        pregunta: `${tema15} How _ (many/much) money do you save?`,
        opciones: [
            `much`,
            `many`,
        ],
        respuesta: ``,
        img: `${imgTema15}`,
    },

    //Preguntas del tema 16
    {
        pregunta: `${tema16} Wonder Woman _ (can/can't) fly, but she _ (can/can't) use her Lasso of Truth.`,
        opciones: [
            `can, can`,
            `can, can't`,
            `can't, can`,
            `can't, can`,
        ],
        respuesta: `can, can`,
        img: `${imgTema16}`,
    },
    {
        pregunta: `${tema16} Batman _ (can/can't) fly, but he _ (can/can't) drive fast his Batmobile.`,
        opciones: [
            `can, can`,
            `can, can't`,
            `can't, can`,
            `can't, can`,
        ],
        respuesta: `can't, can`,
        img: `${imgTema16}`,
    },
    {
        pregunta: `${tema16} We _ (can/can't) speak Chinese, but we _ (can/can't) speak English.`,
        opciones: [
            `can, can`,
            `can, can't`,
            `can't, can`,
            `can't, can`,
        ],
        respuesta: `can't, can`,
        img: `${imgTema16}`,
    },

    /**
     * **********FALTAN RESPUESTAS ********** 
     * * **********FALTAN RESPUESTAS ********** 
     * * **********FALTAN RESPUESTAS ********** 
     * * **********FALTAN RESPUESTAS ********** 
     * * **********FALTAN RESPUESTAS ********** 
     **/    
    //Preguntas del tema 17
    {
        pregunta: `${tema17} They _ (can/should) make beautiful picures.`,
        opciones: [
            `can`,
            `should`,
        ],
        respuesta: ``,
        img: `${imgTema17}`,
    },
    {
        pregunta: `${tema17} She is _ (going to/will) visit the Science Museum.`,
        opciones: [
            `going to`,
            `will`,
        ],
        respuesta: ``,
        img: `${imgTema17}`,
    },
    {
        pregunta: `${tema17} _ (Did/Do) you finish your homework yesterday?`,
        opciones: [
            `Did`,
            `Do`,
        ],
        respuesta: ``,
        img: `${imgTema17}`,
    },
    {
        pregunta: `${tema17} My brother _ (are/is) dancing at the school party.`,
        opciones: [
            `are`,
            `is`,
        ],
        respuesta: ``,
        img: `${imgTema17}`,
    },
    {
        pregunta: `${tema17} _ (Can/Would) you like something to drink?`,
        opciones: [
            `Can`,
            `Would`,
        ],
        respuesta: ``,
        img: `${imgTema17}`,
    },

    /**
     * **********FALTAN RESPUESTAS ********** 
     * * **********FALTAN RESPUESTAS ********** 
     * * **********FALTAN RESPUESTAS ********** 
     * * **********FALTAN RESPUESTAS ********** 
     * * **********FALTAN RESPUESTAS ********** 
     **/    
    //Preguntas del tema 18
    {
        pregunta: `${tema18} SELECT AFFIRMATIVE She _ studying math last night.`,
        opciones: [
            `was`,
            `were`,
        ],
        respuesta: ` was`,
        img: `${imgTema18}`,
    },
    {
        pregunta: `${tema18} SELECT NEGATIVE She _ studying math last night.`,
        opciones: [
            `wasn't`,
            `weren't`,
        ],
        respuesta: `wasn't`,
        img: `${imgTema18}`,
    },
    {
        pregunta: `${tema18} SELECT INTERROGATIVE _ she studying math last night?`,
        opciones: [
            `Was`,
            `Were`,
        ],
        respuesta: `Was`,
        img: `${imgTema18}`,
    },
    {
        pregunta: `${tema18} SELECT AFFIRMATIVE They _ painting my house.`,
        opciones: [
            `was`,
            `were`,
        ],
        respuesta: `were`,
        img: `${imgTema18}`,
    },
    {
        pregunta: `${tema18} SELECT NEGATIVE They _ painting my house.`,
        opciones: [
            `wasn't`,
            `weren't`,
        ],
        respuesta: `weren't`,
        img: `${imgTema18}`,
    },
    {
        pregunta: `${tema18} SELECT INTERROGATIVE _ they painting my house?`,
        opciones: [
            `was`,
            `were`,
        ],
        respuesta: `were`,
        img: `${imgTema18}`,
    },
    {
        pregunta: `${tema18} SELECT AFFIRMATIVE You _ eat more fruits.`,
        opciones: [
            `should`,
            `shouldn't`,
        ],
        respuesta: `should`,
        img: `${imgTema18}`,
    },
    {
        pregunta: `${tema18} SELECT NEGATIVE You _ eat more fruits.`,
        opciones: [
            `should`,
            `shouldn't`,
        ],
        respuesta: `shouldn't`,
        img: `${imgTema18}`,
    },
    {
        pregunta: `${tema18} SELECT INTERROGATIVE SHOLD _ you eat more fruits.`,
        opciones: [
            `Should`,
            `Do`,
        ],
        respuesta: `should`,
        img: `${imgTema18}`,
    },
    {
        pregunta: `${tema18} SELECT AFFIRMATIVE They _ start piano lessons on summer.`,
        opciones: [
            `will`,
            `going to`,
        ],
        respuesta: ``,
        img: `${imgTema18}`,
    },
    {
        pregunta: `${tema18} SELECT NEGATIVE They _ start piano lessons on summer.`,
        opciones: [
            `won't`,
            `aren't going to`,
        ],
        respuesta: ``,
        img: `${imgTema18}`,
    },
    {
        pregunta: `${tema18} SELECT INTERROGATIVE _ they start piano lessons on summer?`,
        opciones: [
            `Will`,
            `Going to`,
        ],
        respuesta: ``,
        img: `${imgTema18}`,
    },
    {
        pregunta: `${tema18} SELECT AFFIRMATIVE My mom _ bake a chocolate cake for my birthday.`,
        opciones: [
            `did`,
            `is going to`,
        ],
        respuesta: ``,
        img: `${imgTema18}`,
    },
    {
        pregunta: `${tema18} SELECT NEGATIVE My mom _ bake a chocolate cake for my birthday.`,
        opciones: [
            `didn't`,
            `isn't going to`,
        ],
        respuesta: ``,
        img: `${imgTema18}`,
    },
    {
        pregunta: `${tema18} SELECT INTERROGATIVE  _ my mom _ bake a chocolate cake for my birthday?`,
        opciones: [
            ``,
            ``,
        ],
        respuesta: ``,
        img: `${imgTema18}`,
    },

    /**
     * **********FALTAN RESPUESTAS ********** 
     * * **********FALTAN RESPUESTAS ********** 
     * * **********FALTAN RESPUESTAS ********** 
     * * **********FALTAN RESPUESTAS ********** 
     * * **********FALTAN RESPUESTAS ********** 
     **/    
    //Preguntas del tema 19
    {
        pregunta: `${tema19} PRESENT He _ horror movies.`,
        opciones: [
            `watch`,
            `watches`,
            `watching`,
        ],
        respuesta: ``,
        img: `${imgTema19}`,
    },
    {
        pregunta: `${tema19} PRESENT PROGRESSIVE He _ horror movies.`,
        opciones: [
            `watches`,
            `is watching`,
            `are watching`,
        ],
        respuesta: ``,
        img: `${imgTema19}`,
    },
    {
        pregunta: `${tema19} GOING TO+VERB He _ watch horror movies.`,
        opciones: [
            `are goig to`,
            `is going to`,
            `going to`,
        ],
        respuesta: ``,
        img: `${imgTema19}`,
    },
    {
        pregunta: `${tema19} PRESENT You _ a beautiful red car.`,
        opciones: [
            `drive`,
            `drives`,
            `driving`,
        ],
        respuesta: ``,
        img: `${imgTema19}`,
    },
    {
        pregunta: `${tema19} PRESENT PROGRESSIVE You _ a beautiful red car.`,
        opciones: [
            `is driving`,
            `are driving`,
            `driving`,
        ],
        respuesta: ``,
        img: `${imgTema19}`,
    },
    {
        pregunta: `${tema19} GOING TO+VERB You _ drive a beautiful red car`,
        opciones: [
            `are goig to`,
            `is going to`,
            `going to`,
        ],
        respuesta: ``,
        img: `${imgTema19}`,
    },
    {
        pregunta: `${tema19} PRESENT My brother _ every morning.`,
        opciones: [
            `run`,
            `runs`,
            `running`,
        ],
        respuesta: ``,
        img: `${imgTema19}`,
    },
    {
        pregunta: `${tema19} PRESENT PROGRESSIVE My brother _ every morning.`,
        opciones: [
            `is running`,
            `are running`,
            `running`,
        ],
        respuesta: ``,
        img: `${imgTema19}`,
    },
    {
        pregunta: `${tema19} GOING TO+VERB My brother _ run every morning.`,
        opciones: [
            `are goig to`,
            `is going to`,
            `going to`,
        ],
        respuesta: ``,
        img: `${imgTema19}`,
    },
    {
        pregunta: `${tema19} PRESENT She _ a new dress.`,
        opciones: [
            `buy`,
            `buys`,
            `buying`,
        ],
        respuesta: ``,
        img: `${imgTema19}`,
    },
    {
        pregunta: `${tema19} PAST She _ a new dress.`,
        opciones: [
            `buy`,
            `bought`,
            `buyed`,
        ],
        respuesta: ``,
        img: `${imgTema19}`,
    },
    {
        pregunta: `${tema19} FUTURE She _ a new dress.`,
        opciones: [
            `buyed`,
            `will buyed`,
            `will buy`,
        ],
        respuesta: ``,
        img: `${imgTema19}`,
    },
    {
        pregunta: `${tema19} PRESENT I _ a good swimmer.`,
        opciones: [
            `are`,
            `am`,
        ],
        respuesta: ``,
        img: `${imgTema19}`,
    },
    {
        pregunta: `${tema19} PAST I _ a good swimmer.`,
        opciones: [
            `was`,
            `were`,
        ],
        respuesta: ``,
        img: `${imgTema19}`,
    },
    {
        pregunta: `${tema19} FUTURE I _ a good swimmer.`,
        opciones: [
            `will be`,
            `is be`,
        ],
        respuesta: ``,
        img: `${imgTema19}`,
    },
    {
        pregunta: `${tema19} PRESENT Many kids _ in the lake.`,
        opciones: [
            `is swimming`,
            `are swimming`,
        ],
        respuesta: ``,
        img: `${imgTema19}`,
    },
    {
        pregunta: `${tema19} PAST Many kids _ in the lake.`,
        opciones: [
            `was`,
            `were`,
        ],
        respuesta: ``,
        img: `${imgTema19}`,
    },
    {
        pregunta: `${tema19} FUTURE Many kids _ in the lake.`,
        opciones: [
            `will be`,
            `is be`,
        ],
        respuesta: ``,
        img: `${imgTema19}`,
    },
    {
        pregunta: `${tema19} PRESENT My friends _ videogames.`,
        opciones: [
            `like`,
            `likes`,
        ],
        respuesta: ``,
        img: `${imgTema19}`,
    },
    {
        pregunta: `${tema19} PAST My friends _ videogames.`,
        opciones: [
            `liked`,
            `likes`,
        ],
        respuesta: ``,
        img: `${imgTema19}`,
    },
    {
        pregunta: `${tema19} FUTURE My friends _ videogames.`,
        opciones: [
            `will liked`,
            `will like`,
        ],
        respuesta: ``,
        img: `${imgTema19}`,
    },
    {
        pregunta: `${tema19} PRESENT My mother _ beautiful roses in her garden.`,
        opciones: [
            `plants`,
            `plant`,
        ],
        respuesta: ``,
        img: `${imgTema19}`,
    },
    {
        pregunta: `${tema19} PAST My mother _ beautiful roses in her garden.`,
        opciones: [
            `planted`,
            `plant`,
        ],
        respuesta: ``,
        img: `${imgTema19}`,
    },
    {
        pregunta: `${tema19} FUTURE My mother _ beautiful roses in her garden.`,
        opciones: [
            `will planted`,
            `will plant`,
        ],
        respuesta: ``,
        img: `${imgTema19}`,
    },

    /**
     * **********FALTAN RESPUESTAS ********** 
     * * **********FALTAN RESPUESTAS ********** 
     * * **********FALTAN RESPUESTAS ********** 
     * * **********FALTAN RESPUESTAS ********** 
     * * **********FALTAN RESPUESTAS ********** 
     **/    
    //Preguntas del tema 20
    {
        pregunta: `${tema20} PRESENT She _ a piece of chocolate cake.`,
        opciones: [
            `eat`,
            `eats`,
        ],
        respuesta: ``,
        img: `${imgTema20}`,
    },
    {
        pregunta: `${tema20} PAST She _ a piece of chocolate cake.`,
        opciones: [
            `eated`,
            `ate`,
        ],
        respuesta: ``,
        img: `${imgTema20}`,
    },
    {
        pregunta: `${tema20} FUTURE She _ a piece of chocolate cake.`,
        opciones: [
            `will ate`,
            `will eat`,
        ],
        respuesta: ``,
        img: `${imgTema20}`,
    },
    {
        pregunta: `${tema20} PRESENT She _ a new languaje course.`,
        opciones: [
            `begin`,
            `begins`,
        ],
        respuesta: ``,
        img: `${imgTema20}`,
    },
    {
        pregunta: `${tema20} PAST She _ a new languaje course.`,
        opciones: [
            `begined`,
            `began`,
        ],
        respuesta: ``,
        img: `${imgTema20}`,
    },
    {
        pregunta: `${tema20} FUTURE She _ a new languaje course.`,
        opciones: [
            `will begined`,
            `will begin`,
        ],
        respuesta: ``,
        img: `${imgTema20}`,
    },
    {
        pregunta: `${tema20} PRESENT My friends _ a window probably by accident.`,
        opciones: [
            `break`,
            `breaks`,
        ],
        respuesta: ``,
        img: `${imgTema20}`,
    },
    {
        pregunta: `${tema20} PAST My friends _ a window probably by accident.`,
        opciones: [
            `breaked`,
            `broke`,
        ],
        respuesta: ``,
        img: `${imgTema20}`,
    },
    {
        pregunta: `${tema20} FUTURE My friends _ a window probably by accident.`,
        opciones: [
            `will broke`,
            `will break`,
        ],
        respuesta: ``,
        img: `${imgTema20}`,
    },
    {
        pregunta: `${tema20} PRESENT An Australian boat _ in the Pacific ocean.`,
        opciones: [
            `sink`,
            `sinks`,
        ],
        respuesta: ``,
        img: `${imgTema20}`,
    },
    {
        pregunta: `${tema20} PAST An Australian boat _ in the Pacific ocean.`,
        opciones: [
            `sank`,
            `sinked`,
        ],
        respuesta: ``,
        img: `${imgTema20}`,
    },
    {
        pregunta: `${tema20} FUTURE An Australian boat _ in the Pacific ocean.`,
        opciones: [
            `will sank`,
            `will sink`,
        ],
        respuesta: ``,
        img: `${imgTema20}`,
    },
    {
        pregunta: `${tema20} PRESENT Joe's family _ a lot of money on Christmas season.`,
        opciones: [
            `spend`,
            `spent`,
        ],
        respuesta: ``,
        img: `${imgTema20}`,
    },
    {
        pregunta: `${tema20} PAST Joe's family _ a lot of money on Christmas season.`,
        opciones: [
            `spent`,
            `spend`,
        ],
        respuesta: ``,
        img: `${imgTema20}`,
    },
    {
        pregunta: `${tema20} FUTURE Joe's family _ a lot of money on Christmas season.`,
        opciones: [
            `will spent`,
            `will spend`,
        ],
        respuesta: ``,
        img: `${imgTema20}`,
    },
]
