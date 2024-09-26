export interface AlmanaxEntryBonus {
  /**
   *
   * @type {string}
   * @memberof AlmanaxEntryBonus
   */
  description?: string;
  /**
   *
   * @type {GetMetaAlmanaxBonuses200ResponseInner}
   * @memberof AlmanaxEntryBonus
   */
  type?: GetMetaAlmanaxBonuses200ResponseInner;
}

export interface GetMetaAlmanaxBonuses200ResponseInner {
  /**
   *
   * @type {string}
   * @memberof GetMetaAlmanaxBonuses200ResponseInner
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof GetMetaAlmanaxBonuses200ResponseInner
   */
  name: string;
}

export interface AlmanaxEntryTributeItem {
  /**
   *
   * @type {number}
   * @memberof AlmanaxEntryTributeItem
   */
  ankama_id: number;
  /**
   *
   * @type {ImageUrls}
   * @memberof AlmanaxEntryTributeItem
   */
  image_urls: ImageUrls;
  /**
   *
   * @type {string}
   * @memberof AlmanaxEntryTributeItem
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof AlmanaxEntryTributeItem
   */
  subtype: string;
}

export interface ImageUrls {
  /**
   * 60x60 px, always available
   * @type {string}
   * @memberof ImageUrls
   */
  icon?: string;
  /**
   * 200x200 px
   * @type {string}
   * @memberof ImageUrls
   */
  sd?: string | null;
  /**
   * 400x400 px
   * @type {string}
   * @memberof ImageUrls
   */
  hq?: string | null;
  /**
   * 800x800 px
   * @type {string}
   * @memberof ImageUrls
   */
  hd?: string | null;
}

export interface AlmanaxEntryTribute {
  /**
   *
   * @type {AlmanaxEntryTributeItem}
   * @memberof AlmanaxEntryTribute
   */
  item: AlmanaxEntryTributeItem;
  /**
   *
   * @type {number}
   * @memberof AlmanaxEntryTribute
   */
  quantity: number;
}

export interface AlmanaxEntry {
  /**
   *
   * @type {AlmanaxEntryBonus}
   * @memberof AlmanaxEntry
   */
  bonus: AlmanaxEntryBonus;
  /**
   *
   * @type {string}
   * @memberof AlmanaxEntry
   */
  date: string;
  /**
   *
   * @type {AlmanaxEntryTribute}
   * @memberof AlmanaxEntry
   */
  tribute: AlmanaxEntryTribute;
  /**
   * Amount of Kamas you get as reward for finishing this Almanax quest.
   * @type {number}
   * @memberof AlmanaxEntry
   */
  reward_kamas?: number | null;
}
