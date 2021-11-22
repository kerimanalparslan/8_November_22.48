export class BaseLogger {
    log(data) {
    console.log("Default logger : " + data)
    }
}

export class ElasticLogger extends BaseLogger{
    log(data) {
        console.log("Logges to Elastic" + data)
    }
}

export class MongoLogger extends BaseLogger{
    log(data) {
        console.log("Logges to Mongo" + data)
    
    }
}