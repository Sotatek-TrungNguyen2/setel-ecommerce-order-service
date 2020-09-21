import { Document, Model, SaveOptions } from 'mongoose';
import { FindAndUpdateOptions } from '@/common/mongo/options.interface';

export class BaseRepository<T extends Document> {
  constructor(public readonly model: Model<T>) {}
  private async isCollectionExists(): Promise<boolean> {
    const result = await this.model.db.db
      .listCollections({ name: this.model.collection.collectionName })
      .next();
    return !!result;
  }
  public async createCollection() {
    if (!(await this.isCollectionExists())) {
      this.model.createCollection();
    }
  }

  public async find() {
    return true;
  }

  public async findOne() {
    return true;
  }
  //create functions
  async create(doc: Record<string, unknown>, options?: SaveOptions): Promise<T>;
  async create(docs: Record<string, unknown>[], options?: SaveOptions): Promise<T[]>;
  async create(
    docs: Record<string, unknown> | Record<string, unknown>[],
    options?: SaveOptions,
  ): Promise<T | T[]> {
    if (Array.isArray(docs)) {
      return Promise.all(docs.map((doc) => this.save(new this.model(doc), options)));
    }
    return this.save(new this.model(docs), options);
  }
  //save functions
  async save(doc: T, options?: SaveOptions): Promise<T>;
  async save(docs: T[], options?: SaveOptions): Promise<T[]>;
  async save(docs: T | T[], options?: SaveOptions): Promise<T | T[]> {
    if (Array.isArray(docs)) {
      return Promise.all(docs.map((doc) => this.save(doc, options)));
    }
    return docs.save(options);
  }
  //update functions
  public async updateById(id: string, doc: any, options: FindAndUpdateOptions) {
    return this.updateOne({ _id: id }, doc, options);
  }
  async updateOne(
    conditions: any,
    doc: any,
    options?: FindAndUpdateOptions,
  ): Promise<T> {
    return this.model.findOneAndUpdate(conditions, doc, { ...options, new: true });
  }

  public async delete() {
    return true;
  }
}
