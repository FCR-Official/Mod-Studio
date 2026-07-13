// Studio Mod Firewall v1
// Scans projects, comments, studios, and user content


const Firewall = {

    settings: {

        blockSpam: true,

        blockSuspiciousLinks: true,

        blockDangerousScripts: true,

        maxRepeatedCharacters: 15

    },


    scan(text) {

        let result = {

            safe: true,

            warnings: []

        };


        if (!text) {

            return result;

        }


        text = text.toLowerCase();



        // Spam detection

        if (this.settings.blockSpam) {


            if (
                /(.)\1{15,}/.test(text)
            ) {

                result.safe = false;

                result.warnings.push(
                    "Too many repeated characters"
                );

            }


            let words =
            text.split(" ");


            let repeats = {};


            words.forEach(word => {

                repeats[word] =
                (repeats[word] || 0) + 1;

            });



            for (let word in repeats) {


                if (
                    repeats[word] >= 8
                ) {

                    result.safe = false;

                    result.warnings.push(
                        "Possible spam detected"
                    );

                }

            }

        }





        // Suspicious links

        if (
            this.settings.blockSuspiciousLinks
        ) {


            const badLinks = [

                "javascript:",

                "data:text/html",

                "discord.gg",

                "grabify",

                "token="

            ];



            badLinks.forEach(link => {


                if (
                    text.includes(link)
                ) {

                    result.safe = false;

                    result.warnings.push(
                        "Suspicious link detected"
                    );

                }


            });


        }





        // Dangerous code checks

        if (
            this.settings.blockDangerousScripts
        ) {


            const dangerous = [

                "eval(",

                "document.cookie",

                "localstorage.clear",

                "<script"

            ];



            dangerous.forEach(item => {


                if (
                    text.includes(item)
                ) {


                    result.safe = false;


                    result.warnings.push(
                        "Potentially unsafe code detected"
                    );


                }


            });


        }




        return result;

    }



};





// Example usage:

/*

let scan =
Firewall.scan(
"hello world"
);


if(scan.safe){

console.log("Approved!");

}

else{

console.log(scan.warnings);

}

*/

