import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  private word_url:string="http://localhost:3000/word/";
  private word_user_url:string="http://localhost:3000/userword/";
  constructor(private _http:HttpClient) { }

  getAllWord()
  {
    return this._http.get(this.word_url);
  }

  DeleteWord(id)
  {
    return this._http.delete(this.word_url+id);
  }

  getCntAvgByWorduser(id)
  {
    return this._http.get(this.word_url+id);
  }
}
