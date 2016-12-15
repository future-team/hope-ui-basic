export interface HelloProps {
    compiler?: string;
    framework?: string;
}

export default class Hello implements HelloProps {
    compiler: string;
    framework: string;
    constructor(compiler:string){

        this.compiler = compiler;
        this.log();
    }

    log():void{
        console.dir(this.compiler);
    }

}