import { NextFunction, Request, Response } from 'express'
import AppError from '../utility/appError'
import catchAsync from '../utility/catchAsync'
import Person from '../models/personModel'

export const getObject = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const object = await Person.findById(req.params.id)

    if (!object) {
      return next(new AppError('No object found with that ID', 404))
    }

    res.status(200).json({
      status: 'success',
      data: {
        object,
      },
    })
  }
)

export const createObject = catchAsync(async (req: Request, res: Response) => {
  const newObject = await Object.create(req.body)

  res.status(201).json({
    status: 'success',
    data: {
      person: newObject,
    },
  })
})
