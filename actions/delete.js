/**
 * Copyright 2018 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the “License”);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an “AS IS” BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

const uuid = require('uuid');

function main(args) {

  // Retreive DB credentials
  const dbURL = args['services.db.url'] || "https://my-nosql-db"
  const dbName = args['services.db.name'] || "cloud-functions-db"

  // Sanitize database object
  delete args['services.db.url']
  delete args['services.db.name']

  return new Promise((resolve, reject) => {
    exports.deleteEntry(dbURL, dbName, args.id,
      (error) => {
        if (error) {
          console.log('[KO]', error);
          reject({ ok: false });
        } else {
          console.log('[OK] Entry Deleted');
          resolve({ ok: true });
        }
      }
    );
  });
}

/// Deletes the specified entry from the given database.
function deleteEntry(dbURL, dbName, entryId, callback /* err */) {

  // Ensure document ID exists
  if (entryId == null) {
    console.log('[KO] No ID specified');
    callback({ ok: false });
    return
  }

  /// Instantiate database Instance and delete entry here
  callback(null)
}

exports.deleteEntry = deleteEntry;
exports.main = global.main = main;
