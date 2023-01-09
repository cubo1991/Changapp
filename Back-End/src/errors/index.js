class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

class ResourceNotFound extends CustomError {
  constructor(resource, model, controller, query) {
    super(
      `Resource ${resource} in model ${model} using ${controller} was not found.`
    );
    this.data = { resource, model, controller, query };
  }
}

class InternalError extends CustomError {
  constructor(error) {
    super(error.message);
    this.data = { error };
  }
}

module.exports = {
  ResourceNotFound,
  InternalError,
};
