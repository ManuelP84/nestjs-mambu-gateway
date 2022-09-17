export interface BaseEntityRepository<T> {
    findOne(options: unknown):Promise<T>;
    find(options: unknown):Promise<T[]>;
    create(entity: unknown):Promise<T>;
    findOneAndReplace(options: unknown, entity: unknown):Promise<void>;
}
